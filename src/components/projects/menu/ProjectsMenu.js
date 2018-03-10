import React, { PropTypes } from 'react';
import { selectProject } from '../../../actions/ProjectActions';
const connect = require('react-redux').connect;

import './projectsMenu.css';

class ProjectsMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleWorkClick = this.onProjectClick.bind(this);
        props.projects = [];
    }

    onProjectClick(event, project) {
        this.props.dispatch(selectProject(project));
    }
    render() {
        return (
        <div>
            {this.props.projects.map(project =>
                <div key={project.id} onClick={(e) => this.onProjectClick(e, project)}>
                    <div className="project-menu-section">
                        <span>{project.name}</span>
                    </div>
                    {project.works.map(work =>
                        <div className="work-menu-section">
                            <span>
                                {work.name}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>);
    }
}

export default connect()(ProjectsMenu);