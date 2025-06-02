import LoadActionTypes from "./action-types"

export const setLoadingAction = (loading) => ({
    type: LoadActionTypes.SET_LOADING,
    payload: {loading: loading},
})