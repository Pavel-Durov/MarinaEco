import React from 'react';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';
import ProjectsMenu from './menu/ProjectsMenu';
import ProjectDetails from './details/ProjectDetails'
import { Grid, Row, Col } from 'react-bootstrap';

import { prop } from 'ramda';

const connect = require('react-redux').connect;

import './projects.css';

class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="page-wrap">
                <h1 className="project-bread-crumbs">
                    /{this.props.translate('projects')}
                    {this.props.selectedProject ? `/${this.props.selectedProject.name}` : ''}
                </h1>
                <ProjectsMenu projects={this.props.projectsCollection} />
                <ProjectDetails project={this.props.selectedProject} />
            </div >
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        selectedProject: state.projects.selectedProject,
        projectsCollection: state.projects.projectsCollection,
        translate: getTranslate(state.localeReducer),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        workSelected: () => dispatch(selectProject({ name: Date.now() }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);