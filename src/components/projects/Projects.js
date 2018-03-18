import React from 'react';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';
import ProjectsMenu from './menu/ProjectsMenu';
import ProjectDetails from './details/ProjectDetails'
import { Grid, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

import { prop, head, isNil, not, clone } from 'ramda';

const connect = require('react-redux').connect;

import './projects.css';

class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onProjectSelected = this.onProjectSelected.bind(this);
    }

    componentWillUnmount() {
        this.props.dispatch(selectProject(undefined));
    }
    onProjectSelected(index) {
        var project = this.props.projectsCollection[index];
        this.props.dispatch(selectProject(project));
    }
    render() {
        return (
            <div>
                <ProjectsMenu projects={this.props.menuItems} />
                <div id="outer-container">
                    {
                        isNil(this.props.selectedProject) ?
                            (<div>
                                <Gallery enableImageSelection={false} onClickThumbnail={this.onProjectSelected}
                                    images={this.props.projectsCollection ? clone(this.props.projectsCollection) : []} />
                            </div>)
                            :
                            (<div>
                                <h1 className="project-bread-crumbs">
                                    /{this.props.translate('projects')}
                                    {this.props.selectedProject ? `/${this.props.selectedProject.name}` : ''}
                                </h1>
                                <ProjectDetails project={this.props.selectedProject} />
                            </div>)
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        menuItems: state.menu.items,
        selectedProject: state.projects.selectedProject,
        projectsCollection: state.projects.projectsCollection,
        translate: getTranslate(state.localeReducer),
    };
}

export default connect(mapStateToProps)(Projects);