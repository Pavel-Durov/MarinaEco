import { 
    WORKS_SELECTED_ACTION_TYPE, 
    WORKS_LOADED_SUCCESS 
} from '../actions/ProjectActions';

const DEFAULT_STATE = {};

export default function ProjectsReducer(state = DEFAULT_STATE, action) {
    let nextState = state;
    switch (action.type) {
        case WORKS_SELECTED_ACTION_TYPE:
            nextState = Object.assign({}, state, {
                selectedProject: action.payload
            });
            break;
        case WORKS_LOADED_SUCCESS:
            nextState = Object.assign({}, state, {
                projectsCollection: action.payload
            });
            break;
    }
    return nextState;
}