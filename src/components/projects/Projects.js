import React from 'react';
import PropTypes from 'prop-types';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';
import { not, isNil, isEmpty, clone } from 'ramda';

import ProjectDetails from './details/ProjectDetails';
import ProjectsMenu from './menu/ProjectsMenu';
import Gallery from 'react-grid-gallery';

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
        const project = this.props.projectsCollection[index];
        this.props.dispatch(selectProject(project));
    }
    render() {
        return (
            <div>
                <ProjectsMenu projects={this.props.menuItems} />
                <div id="outer-container">
                    {
                        isNil(this.props.selectedProject.name) ?
                            (<div>
                                {
                                    not(isEmpty(this.props.projectsCollection)) ?
                                        <Gallery enableImageSelection={false} onClickThumbnail={this.onProjectSelected}
                                            images={clone(this.props.projectsCollection)} />
                                        : <div/>
                                }
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
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        menuItems: state.menu.items,
        selectedProject: state.projects.selectedProject || {},
        projectsCollection: state.projects.projectsCollection || [],
        translate: getTranslate(state.localeReducer),
    };
}

Projects.propTypes = {
    'dispatch': PropTypes.func,
    'projectsCollection': PropTypes.array,
    'menuItems': PropTypes.array,
    'selectedProject': PropTypes.object,
    'translate': PropTypes.func,
    'selectedProject.name': PropTypes.string
};

export default connect(mapStateToProps)(Projects);