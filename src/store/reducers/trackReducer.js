import { SAVE_TRACKS, SAVE_CONTROL_FUN, SAVE_CURR_TRACK_IND } from "../actions/constants";

const defaultState = {
    tracks: [],
    trackInd: undefined,
    trackUrl: undefined
}

const trackReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_TRACKS:
            return {...state, tracks: action.payload};
        case SAVE_CONTROL_FUN:
            return {...state, control: action.payload};
        case SAVE_CURR_TRACK_IND:
            return {...state, trackInd: action.payload.trackInd, trackUrl: action.payload.trackUrl};
        default:
            return state;
    }
}

export default trackReducer;