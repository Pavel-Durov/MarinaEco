import { combineReducers } from "redux";
import { localeReducer } from 'react-localize-redux';
import projects from './projectsReducer';

const rootReducer = combineReducers({
    projects,
    localeReducer
});

export default rootReducer;