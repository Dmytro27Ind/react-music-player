import { SAVE_CONTROL_FUN, SAVE_TRACKS } from "./constants";

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

export {saveTracks, saveControlFun}