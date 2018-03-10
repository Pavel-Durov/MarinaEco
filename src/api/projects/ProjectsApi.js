import projectsData from './projectsData.mock.js';

const DELAY_SIMULATION = 1;

export class ProjectsApi {
    static getAllWorks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], projectsData.projects));
            }, DELAY_SIMULATION);
        });
    }
}