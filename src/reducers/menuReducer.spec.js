import expect from 'expect';

import MenuReducer, { globalNavMenuItems } from './menuReducer';
import { loadWorksSuccess } from '../actions/ProjectActions';

const project = { id: 1, works: [{ id: 'work-1' }] };
const works = [project];

describe('MenuReducer', () => {

    it('emptyAction', () => {
        const state = MenuReducer({}, {});
        expect(state).toBeAn('object');
    });

    describe('MenuReducer::loadWorksSuccess', () => {
        it('empty payload', () => {
            const state = MenuReducer({}, loadWorksSuccess());
            expect(state).toBeAn('object');
        });

        it('globalNavMenuItems', () => {
            const state = MenuReducer({}, loadWorksSuccess(works));
            expect(state.items.length).toBe(works.length + globalNavMenuItems.length);
        });
    });
});
