import React from 'react';
import PropTypes from 'prop-types';
import { selectProject } from '../../../actions/ProjectActions';
import { push as Menu } from 'react-burger-menu';
import { map, clone, find, propEq, prop, not, isNil } from 'ramda';

const connect = require('react-redux').connect;
import './projectsMenu.css';

class ProjectsMenu extends React.Component {
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
        const project = find(propEq('id', parseInt(selectedProjectId)), this.props.projects);
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
                    pageWrapId={"outer-container"} outerContainerId={"outer-container"} >
                    {map(project =>
                        <ul project-id={project.id} onClick={this.onMenuItemClicked} className="menu-item">
                            <h2 project-id={project.id}>{project.name}</h2>
                            {
                                map(work => <li project-id={project.id}>{work.name}</li>, (project.works || []))
                            }
                        </ul>
                        , (this.props.projects || []))}
                </Menu>
            </div >
        );
    }
}

ProjectsMenu.propTypes = {
    dispatch: PropTypes.func,
    projects: PropTypes.array
};

export default connect()(ProjectsMenu);