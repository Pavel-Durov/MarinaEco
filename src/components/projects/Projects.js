import React from 'react';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';

const connect = require('react-redux').connect;

import ProjectsMenu from './ProjectsMenu';

const Projects = ({ translate, workSelected, selectedProject, projectsCollection }) => {
    return (
        <div>
            <h1>{translate('projects')}</h1>
            <ProjectsMenu projects={projectsCollection} />
        </div>
    );
};

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