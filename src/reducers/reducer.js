import {
    TOGGLE_MENU_CLICK
} from '../actions/actions'

const initialState = {
    menuClicked : false,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MENU_CLICK: {
            return Object.assign({}, state, {
                menuClicked : !this.state.menuClicked,
            });
        }
        default:
            return state
    }
}