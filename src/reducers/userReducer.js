import * as userTypes from "../actions/types/user";

const initialState = {
    currentUser: {},
    userData: {},
    updataDataUser: true,
    checking: true,
    isLoggedIn: false,
    loading: false,
    success: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.GET_USER_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        case userTypes.GET_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                isLoggedIn: action.payload.isLoggedIn,
                loading: action.payload.loading,
                success: action.payload.success
            };
        case userTypes.GET_USER_DATA_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                userData: action.payload.userData,
                isLoggedIn: action.payload.isLoggedIn,
                loading: action.payload.loading,
                updataDataUser: action.payload.updataDataUser,
                success: action.payload.success
            };
        case userTypes.GET_USER_FAILED:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                loading: action.payload.loading,
                success: action.payload.success
            };
        case userTypes.AUTH_CHECKING_FINISH:
            return {
                ...state,
                checking: action.payload.checking
            };
        case userTypes.LOGOUT_USER_FINISH:
            return {
                currentUser: {},
                userData: {},
                updataDataUser: true,
                checking: false,
                isLoggedIn: false,
                loading: false,
                success: false
            };

        case userTypes.UPDATE_USER_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        case userTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                userData: action.payload.userData,
                loading: action.payload.loading,
                success: action.payload.success
            };
        case userTypes.UPDATE_USER_FAILED:
            return {
                ...state,
                loading: action.payload.loading,
                success: action.payload.success
            };
        case userTypes.UPDATE_USER_PHOTO_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        case userTypes.UPDATE_USER_PHOTO_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.currentUser,
                userData: action.payload.userData,
                loading: action.payload.loading,
                success: action.payload.success
            };
        case userTypes.UPDATE_USER_PHOTO_FAILED:
            return {
                ...state,
                loading: action.payload.loading,
                success: action.payload.success
            };

        default:
            return state;
    }
};
