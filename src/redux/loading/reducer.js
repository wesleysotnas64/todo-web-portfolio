import LoadActionTypes from "./action-types";

const initialState = {
    loading: false,
};

const loadingReducer = (state = initialState, action) => {

    switch (action.type){
        case LoadActionTypes.SET_LOADING:
            return {
                ...state, loading: action.payload.loading
            }

        default:
            return initialState;
    }

}

export default loadingReducer;