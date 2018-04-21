import { PROJECTS_LOADED_SUCCESS } from '../actions/ProjectActions';

const DEFAULT_STATE = {
    items: undefined
};

export const globalNavMenuItems = [
    {
        name: 'Home',
        isNavLink: true
    },
    {
        name: 'About',
        isNavLink: true
    },
    {
        name: 'Projects',
        isNavLink: true
    },
    {
        name: 'Contact me',
        isNavLink: true
    },
];

export default function menuReducer(state = DEFAULT_STATE, action) {
    let nextState = state;
    switch (action.type) {
        case PROJECTS_LOADED_SUCCESS:
            nextState = Object.assign({}, state, {
                items: [...globalNavMenuItems, ...action.payload || []]
            });
            break;
    }
    return nextState;
}