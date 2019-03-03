import * as actionTypes from '../actions/finder';

const initialState = {
    isFinderOpen: false,
    searchValue: ''
};

const finderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_FINDER:
            return {
                ...state,
                isFinderOpen: true
            };
        case actionTypes.CLOSE_FINDER:
            return {
                ...state,
                isFinderOpen: false
            };
        case actionTypes.SELECT_FOUND_ITEM:
            return {
                ...state,
                isFinderOpen: false
            };
        case actionTypes.TYPE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.value
            };
        default:
            return state;
    }
};

export default finderReducer;
