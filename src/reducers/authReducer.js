import * as authTypes from "../actions/types/auth";
const initialState = {
    auth: {},
    loading: false,
    success: false
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN_LOADING:
            return { ...state, loading: action.payload.loading };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.payload.auth,
                loading: action.payload.loading,
                success: action.payload.success
            };
        case authTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: action.payload.loading,
                success: action.payload.success
            };

        default:
            return state;
    }
};
