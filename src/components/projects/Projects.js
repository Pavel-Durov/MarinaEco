import React, { PropTypes } from 'react';
import { selectProject } from '../../actions/ProjectActions';
const connect = require('react-redux').connect;

import ProjectList from './ProjectList';


const Projects = (props) => {
    const { workSelected, selectedProject, projectsCollection } = props;

    return (
        <div>
            <h1>Projects</h1>
            {/* <button onClick={workSelected}>
                SELECT WORK
            </button> */}

            <ProjectList projects={projectsCollection} />

            <div>
                <h1>SelectedItem</h1>
                <p>
                    {JSON.stringify(selectedProject)}
                </p>
            </div>
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    return {
        selectedProject: state.projects.selectedProject,
        projectsCollection: state.projects.projectsCollection
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        workSelected: () => dispatch(selectProject({ name: Date.now() }))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);