import React from 'react';
import Gallery from 'react-grid-gallery';
import { prop, map } from 'ramda';

import './projectDetails.css';

class ProjectDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lightboxIsOpen: false
        };
    }
    render() {
        return (
            <div>
                <p className="project-description">
                    {prop('description', this.props.project)}
                </p>


                <Gallery images={this.props.project ? this.props.project.works : []} />
            </div>
        )
    }
};


export default ProjectDetails;