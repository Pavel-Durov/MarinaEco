import { combineReducers } from "redux";
import { localeReducer } from 'react-localize-redux';
import projects from './projectsReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
    menu,
    projects,
    localeReducer
});

export default rootReducer;