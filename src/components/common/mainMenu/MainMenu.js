import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { selectProject } from '../../../actions/ProjectActions';
import { push as Menu } from 'react-burger-menu';
import { clone, find, propEq, prop, not, isNil } from 'ramda';

const connect = require('react-redux').connect;
import './menu.css';

class MainMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuOpen: false
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
    }

    onMenuItemClicked(event) {
        event.preventDefault();
        const selectedProjectId = event.target.getAttribute('project-id');
        const project = find(propEq('id', parseInt(selectedProjectId)), this.props.menuItems);
        if (not(isNil(project))) {
            this.props.dispatch(selectProject(project));
            this.setState({ menuOpen: false });
        }

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
                            <ul key={projectIndex} project-id={project.id}
                                onClick={this.onMenuItemClicked} className="menu-item">
                                {
                                    project.isNavLink ?
                                      <h2>
                                        <Link to={project.link}>
                                            {project.name}
                                        </Link>
                                      </h2>
                                    :
                                        <div>
                                            <h2 project-id={project.id}>{project.name}</h2>
                                            {
                                                (project.works || []).map((work, workIndex) => {
                                                    return <li key={`${projectIndex}${workIndex}`} project-id={project.id}>{work.name}</li>;
                                                })
                                            }
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