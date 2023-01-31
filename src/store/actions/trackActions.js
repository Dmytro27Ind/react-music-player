import { SAVE_TRACKS } from "./constants";

const saveTracks = (tracks) => {
    return {
        type: SAVE_TRACKS,
        payload: tracks
    }
}

export {saveTracks}