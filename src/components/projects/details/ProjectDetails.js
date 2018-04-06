import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import { prop, map, clone } from 'ramda';
import './projectDetails.css';

class ProjectDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
   
    render() {
        return (
            <div>
                <p className="project-description">
                    {prop('description', this.props.project)}
                </p>
                <Gallery enableImageSelection={false} images={this.props.project.works ? clone(this.props.project.works): []} />
            </div>
        );
    }
}

ProjectDetails.propTypes = {
    'project': PropTypes.object,
    'project.works': PropTypes.array
};

export default ProjectDetails;