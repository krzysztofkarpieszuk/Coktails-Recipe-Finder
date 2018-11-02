import * as actionTypes from '../actions';

const initialState = {
    isMenuOpen: false
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
        case actionTypes.SELECT_LINK:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }     
    }
    return state;
}

export default menuReducer;