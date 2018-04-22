import expect from 'expect';

import ProjectsReducer from './projectsReducer';
import {
    loadWorksSuccess,
    selectProject,
    loadProjects
} from '../actions/ProjectActions';

const project = { id: 1, works: [{ id: 'work-1' }] };
const works = [project];

describe('ProjectsReducer', () => {

    it('emptyAction', () => {
        const state = ProjectsReducer({}, {});
        expect(state).toBeAn('object');
    });

    describe('ProjectsReducer::loadWorksSuccess', () => {
        it('empty payload', () => {
            const state = ProjectsReducer({}, loadWorksSuccess());
            expect(state.projectsCollection).toBe(undefined);
        });
        it('payload mutation', () => {
            const state = ProjectsReducer({}, loadWorksSuccess(works));
            expect(state.projectsCollection).toBeAn('object');
        });
        it('payload mutation', () => {
            const state = ProjectsReducer({}, loadWorksSuccess(works));
            expect(state.projectsCollection.length).toBe(1);
        });
    });

    describe('ProjectsReducer::selectProject', () => {
        it('empty payload', () => {
            const state = ProjectsReducer({}, selectProject());
            expect(state.selectedProject).toBe(undefined);
        });
        it('ProjectsReducer payload mutation', () => {
            const state = ProjectsReducer({}, selectProject(project));
            expect(state.selectedProject).toBe(project);
        });
        it('ProjectsReducer payload mutation', () => {
            const state = ProjectsReducer({}, selectProject(project));
            expect(state.selectedProject.id).toBe(1);
        });
    });
});
