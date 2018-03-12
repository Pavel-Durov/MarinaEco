
export const PROJECTS_SELECTED_ACTION_TYPE = "projects/SELECTED";
export const PROJECTS_LOADED_SUCCESS = "projects/PROJECTS_LOADED_SUCCESS";
 
import { ProjectsApi } from '../api/projects/ProjectsApi';

export function selectProject(project) {
    return {
        type: PROJECTS_SELECTED_ACTION_TYPE,
        payload: project
    };
}

export function loadWorksSuccess(projects) {
    return {
        type: PROJECTS_LOADED_SUCCESS,
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