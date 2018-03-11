import React from 'react';
import { prop } from 'ramda';

import './projectDetails.css';

class ProjectDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <p className="project-description">
                    {prop('name', this.props.project)}
                </p>
                {JSON.stringify(this.props.project)}
            </div>
        )
    }
};


export default ProjectDetails;