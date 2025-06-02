import TodoActionTypes from "./action-types";

export const setCurrentAction = (payload) => ({
    type: TodoActionTypes.SET_CURRENT,
    payload,
})