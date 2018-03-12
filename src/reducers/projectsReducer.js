import { isNil, head, ifElse } from 'ramda';
import {
    PROJECTS_SELECTED_ACTION_TYPE,
    PROJECTS_LOADED_SUCCESS
} from '../actions/ProjectActions';

const DEFAULT_STATE = {};


const getDefaultSelection = (selected, projects) => isNil(selected) ? head(projects) : selected;

export default function ProjectsReducer(state = DEFAULT_STATE, action) {
    let nextState = state;
    switch (action.type) {
        case PROJECTS_SELECTED_ACTION_TYPE:
            nextState = Object.assign({}, state, {
                selectedProject: action.payload
            });
            break;
        case PROJECTS_LOADED_SUCCESS:
            nextState = Object.assign({}, state, {
                projectsCollection: action.payload,
                selectedProject: getDefaultSelection(state.selectedProject, action.payload)
            });
            break;
    }
    return nextState;
}