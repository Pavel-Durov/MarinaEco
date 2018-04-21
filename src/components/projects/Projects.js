import React from 'react';
import PropTypes from 'prop-types';
import { selectProject } from '../../actions/ProjectActions';
import { getTranslate } from 'react-localize-redux';
import { isNil, clone } from 'ramda';

import ProjectDetails from './details/ProjectDetails';
import MainMenu from '../common/mainMenu/MainMenu';
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
                <MainMenu />
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
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
<<<<<<< Updated upstream
        menuItems: state.menu.items,
        selectedProject: state.projects.selectedProject,
        projectsCollection: state.projects.projectsCollection,
=======
        selectedProject: state.projects.selectedProject || {},
        projectsCollection: state.projects.projectsCollection || [],
>>>>>>> Stashed changes
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