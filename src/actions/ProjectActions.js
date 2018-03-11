
export const WORKS_SELECTED_ACTION_TYPE = "projects/SELECTED";
export const WORKS_LOADED_SUCCESS = "projects/WORKS_LOADED_SUCCESS";
 
import { ProjectsApi } from '../api/projects/ProjectsApi';

export function selectProject(project) {
    return {
        type: WORKS_SELECTED_ACTION_TYPE,
        payload: project
    };
}

export function loadWorksSuccess(projects) {
    return {
        type: WORKS_LOADED_SUCCESS,
        payload: projects
    };
}

export function loadProjects() {
    return function (dispatch) {
        return ProjectsApi.getAllWorks().then(project => {
            dispatch(loadWorksSuccess(project));
        }).catch(error => {
            throw (error);
        });
    };
}