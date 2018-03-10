import React from 'react';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';

const connect = require('react-redux').connect;

import ProjectsMenu from './menu/ProjectsMenu';
import ProjectContent from './content/ProjectContent'
import { Grid, Row, Col } from 'react-bootstrap';

const Projects = ({ translate, workSelected, selectedProject, projectsCollection }) => {
    return (
        <div>
            <h1>/{translate('projects')}</h1>
            <Grid fluid="true">
                <Row>
                    <Col xs={12} sm={2} md={2} lg={2}>
                        <ProjectsMenu projects={projectsCollection} />
                    </Col>
                    <Col xsHidden="true">
                        <ProjectContent project={selectedProject}/>
                    </Col>
                </Row>
            </Grid>
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