import React from 'react';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';
import ProjectsMenu from './menu/ProjectsMenu';
import ProjectDetails from './details/ProjectDetails'
import { Grid, Row, Col } from 'react-bootstrap';

import { prop, head } from 'ramda';

const connect = require('react-redux').connect;

import './projects.css';

class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillUnmount() {
        this.props.dispatch(selectProject(undefined))
    }

    render() {
        return (
            <div>
                <ProjectsMenu projects={this.props.projectsCollection} />
                <div id="outer-container">
                    <div id="outer-container">
                        <h1 className="project-bread-crumbs">
                            /{this.props.translate('projects')}
                            {this.props.selectedProject ? `/${this.props.selectedProject.name}` : ''}
                        </h1>
                        <ProjectDetails project={this.props.selectedProject} />
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps)(Projects);