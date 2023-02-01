import { SAVE_CONTROL_FUN, SAVE_TRACKS, SAVE_CURR_TRACK_IND } from "./constants";

const saveTracks = (tracks) => {
    return {
        type: SAVE_TRACKS,
        payload: tracks.map((t) => ({...t, audio: new Audio(t.url)}))
    }
}

const saveControlFun = (control) => {
    return {
        type: SAVE_CONTROL_FUN,
        payload: control
    }
}

const saveCurrTrackInd = (trackInd) => {
    return {
        type: SAVE_CURR_TRACK_IND,
        payload: trackInd
    }
}

export {saveTracks, saveControlFun, saveCurrTrackInd}