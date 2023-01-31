import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import trackReducer from './trackReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    track: trackReducer
})

export default rootReducer;