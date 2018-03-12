import React, { PropTypes } from 'react';
import { selectProject } from '../../../actions/ProjectActions';
import { push as Menu } from 'react-burger-menu';
import { map, clone } from 'ramda';

const connect = require('react-redux').connect;
import './projectsMenu.css';

class ProjectsMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuOpen: false
        };
    }

    onMenuItemClicked(event, project) {
        event.preventDefault();
        this.props.dispatch(selectProject(project));
        this.setState({ menuOpen: false });
    }
    handleStateChange(state) {
        this.setState({ menuOpen: this.state.isOpen });
    }
    render() {
        return (
            <div>
                <Menu isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    pageWrapId={"outer-container"} outerContainerId={"outer-container"} >
                    {map(project =>
                        <ul id={project.id} onClick={(e) => this.onMenuItemClicked(e, project)}
                            className="menu-item">
                            <h2>{project.name}</h2>
                            {
                                map(work => <li>{work.name}</li>, (project.works || []))
                            }
                        </ul>
                        , (this.props.projects || []))}
                </Menu>
            </div >
        );
    }
}

export default connect()(ProjectsMenu);