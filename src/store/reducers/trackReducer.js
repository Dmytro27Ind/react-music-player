import { SAVE_TRACKS } from "../actions/constants";

const defaultState = {
    tracks: []
}

const trackReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_TRACKS:
            return {...state, tracks: action.payload};
        default:
            return state;
    }
}

export default trackReducer;