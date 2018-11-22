import * as actionTypes from '../actions';

const initialState = {
    isPopularSliderOpen: false
}

const popularDrinksReducer = (state = initialState, action) => {
    if (action.type === actionTypes.TOGGLE_POPULAR_DRINKS) {
        return {
            ...state,
            isPopularSliderOpen: !state.isPopularSliderOpen
        }
    }

    return state;
}

export default popularDrinksReducer;