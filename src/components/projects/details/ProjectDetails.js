import React from 'react';
import Gallery from 'react-grid-gallery';
import { prop, map, clone } from 'ramda';

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


                <Gallery enableImageSelection={false}
                    images={this.props.project ? clone(this.props.project.works) : []} />
            </div>
        )
    }
};


export default ProjectDetails;