import React from 'react';
import './projectContent.css';

class ProjectContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props.project = {};
    }
    render() {
        return (
            <div>
                <h1 className="project-name">{this.props.project.name}</h1>
                <p className="project-description">
                    {this.props.project.name}
                </p>
                {JSON.stringify(this.props.project)}
            </div>
        )
    }
};


export default ProjectContent;