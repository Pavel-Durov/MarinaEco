import React from 'react';
import PropTypes from 'prop-types';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';
import { not, isNil, isEmpty, clone, find, propEq } from 'ramda';

import ProjectDetails from './details/ProjectDetails';
import MainMenu from '../common/mainMenu/MainMenu';
import Gallery from 'react-grid-gallery';

const connect = require('react-redux').connect;

import './projects.css';

class Projects extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.selectedProject = {};
        this.onProjectSelected = this.onProjectSelected.bind(this);

        this.setSelectedProject(this.props);
    }

    setSelectedProject(props) {
        const id = parseInt(props.location.query.id);
        const project = find(propEq('id', id), this.props.projectsCollection);
        this.selectedProject = project || {};
    }

    componentWillUpdate(props) {
        this.setSelectedProject(props);
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
                <MainMenu />
                <div id="outer-container">
                    {
                        isNil(this.selectedProject.name) ?
                            (<div>
                                {
                                    not(isEmpty(this.props.projectsCollection)) ?
                                        <Gallery enableImageSelection={false} onClickThumbnail={this.onProjectSelected}
                                            images={clone(this.props.projectsCollection)} />
                                        : <div />
                                }
                            </div>)
                            :
                            (<div>
                                <h1 className="project-bread-crumbs">
                                    /{this.props.translate('projects')}
                                    {this.selectedProject ? `/${this.selectedProject.name}` : ''}
                                </h1>
                                <ProjectDetails project={this.selectedProject} />
                            </div>)
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        projectsCollection: state.projects.projectsCollection || [],
        translate: getTranslate(state.localeReducer),
    };
}

Projects.propTypes = {
    'dispatch': PropTypes.func,
    'projectsCollection': PropTypes.array,
    'selectedProject': PropTypes.object,
    'translate': PropTypes.func,
    'selectedProject.name': PropTypes.string
};

export default connect(mapStateToProps)(Projects);