import TodoActionTypes from "./action-types";

const initialState = {
    currentTodo: {
        id: "",
        title: "",
        description: "",
        isCompleted: false
    },
};

const todoReducer = (state = initialState, action) => {
    if(action.type === TodoActionTypes.SET_CURRENT){
        return {...state, currentTodo: action.payload}
    }

    return initialState;
};

export default todoReducer;