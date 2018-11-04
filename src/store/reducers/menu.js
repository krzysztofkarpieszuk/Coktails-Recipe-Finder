import * as actionTypes from '../actions';

const initialState = {
    isMobileMenuOpen: false
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                isMobileMenuOpen: !state.isMobileMenuOpen
            }
        case actionTypes.SELECT_LINK:
            if (state.isMobileMenuOpen) {
                return {
                    ...state,
                    isMobileMenuOpen: false
                }
            } 

    }
    return state;
}

export default menuReducer;