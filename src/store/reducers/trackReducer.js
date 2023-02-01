import { SAVE_TRACKS, SAVE_CONTROL_FUN } from "../actions/constants";

const defaultState = {
    tracks: []
}

const trackReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_TRACKS:
            return {...state, tracks: action.payload};
        case SAVE_CONTROL_FUN:
            return {...state, control: action.payload};
        default:
            return state;
    }
}

export default trackReducer;