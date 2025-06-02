import { combineReducers } from "redux";

import todoReducer from "./todo/reducer";
import loadingReducer from "./loading/reducer";

const rootReducer = combineReducers({
    todoReducer,
    loadingReducer
});

export default rootReducer;