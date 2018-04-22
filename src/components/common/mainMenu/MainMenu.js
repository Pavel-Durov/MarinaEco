import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { selectProject } from '../../../actions/ProjectActions';
import { push as Menu } from 'react-burger-menu';

const connect = require('react-redux').connect;
import './menu.css';

class MainMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuOpen: false
        };
        this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
    }

    onMenuItemClicked(event) {
        this.setState({ menuOpen: false });
    }

    handleStateChange(state) {
        this.setState({ menuOpen: this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Menu isOpen={this.state.menuOpen}
                    onStateChange={this.handleStateChange}
                    pageWrapId={"outer-container"} outerContainerId={"outer-container"}>
                    {
                        (this.props.menuItems || []).map((project, projectIndex) =>
                            <ul key={projectIndex} project-id={project.id} className="menu-item">
                                {
                                    project.isNavLink ?
                                        <h2>
                                            <Link to={project.link} onClick={this.onMenuItemClicked}>
                                                {project.name}
                                            </Link>
                                        </h2>
                                        :
                                        <div>
                                            <Link to={{ pathname: '/projects', query: { id: project.id } }} onClick={this.onMenuItemClicked}>
                                                {project.name}
                                                {
                                                    (project.works || []).map((work, workIndex) => {
                                                        return <li key={`${projectIndex}${workIndex}`} project-id={project.id}>{work.name}</li>;
                                                    })
                                                }
                                            </Link>
                                        </div>
                                }
                            </ul>)
                    }
                </Menu>
            </div >
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        menuItems: state.menu.items
    };
}

MainMenu.propTypes = {
    dispatch: PropTypes.func,
    menuItems: PropTypes.array
};

export default connect(mapStateToProps)(MainMenu);