import * as userTypes from "./types/user";
import API from "../service";
import * as localStorageUtil from "../utilities/localStorage";
import { refreshToken } from "./auth";

export const getUserById = (userId, isUserData) => async dispatch => {
    try {
        const currentUser = await API.get(`/users/${userId}/`);
        if (isUserData) {
            dispatch({
                type: userTypes.GET_USER_DATA_SUCCESS,
                payload: {
                    currentUser: currentUser.data,
                    userData: currentUser.data,
                    isLoggedIn: true,
                    loading: false,
                    success: true
                }
            });
        } else {
            dispatch({
                type: userTypes.GET_USER_SUCCESS,
                payload: {
                    currentUser: currentUser.data,
                    userData: currentUser.data,
                    updataDataUser: false,
                    isLoggedIn: true,
                    loading: false,
                    success: true
                }
            });
        }
        return {
            status: true,
            refresh: false
        };
    } catch (e) {
        const refreshTokenState = localStorageUtil.load("refreshToken");
        if ((e.response?.status === 403 || e.response?.status === 401) && refreshTokenState === "false") {
            localStorageUtil.save("refreshToken", true);
            await dispatch(refreshToken());
            return {
                status: false,
                refresh: true
            };
        } else if (refreshTokenState === "true") {
            localStorageUtil.clear();
            return {
                status: false,
                refresh: false
            };
        }
        dispatch({
            type: userTypes.GET_USER_FAILED,
            payload: {
                currentUser: {},
                userData: {},
                updataDataUser: true,
                isLoggedIn: false,
                loading: false,
                success: false
            }
        });
        return {
            status: false,
            refresh: false
        };
    }
};
export const updateUser = (userId, userData) => async dispatch => {
    try {
        const newUser = {
            ...userData,
            company: userData.company?.id || 0,
            groups: userData.groups?.map(group => group.id) || []
        };
        if (newUser.user_permissions) {
            delete newUser.user_permissions;
        }
        newUser.photo && delete newUser.photo;
        const userUpdate = await API.put(`/users/${userId}/update`, newUser);
        dispatch({
            type: userTypes.UPDATE_USER_SUCCESS,
            payload: {
                currentUser: { ...userUpdate.data, id: userId },
                userData: { ...userUpdate.data, id: userId },
                loading: false,
                success: true
            }
        });
        return true;
    } catch (e) {
        const errorMessage = Object.entries(e.response?.data)[0][0] + " : " + Object.entries(e.response?.data)[0][1];
        dispatch({
            type: userTypes.UPDATE_USER_FAILED,
            payload: {
                loading: false,
                success: false
            }
        });
        return false;
    }
};

export const updateUserPhoto = (userId, userData, photoFile) => async dispatch => {
    try {
        const formData = new FormData();
        formData.append("photo", photoFile);
        const userUpdateResponse = await API.put(`/users/${userId}/photo`, formData);
        const userUpdate = {
            ...userData,
            photo: userUpdateResponse.data.photo
        };
        dispatch({
            type: userTypes.UPDATE_USER_PHOTO_SUCCESS,
            payload: {
                currentUser: { ...userUpdate },
                userData: { ...userUpdate },
                loading: false,
                success: true
            }
        });
        return true;
    } catch (e) {
        const errorMessage = e.response?.data && Object.entries(e.response?.data)[0][0] + " : " + Object.entries(e.response?.data)[0][1];
        dispatch({
            type: userTypes.UPDATE_USER_PHOTO_FAILED,
            payload: {
                loading: false,
                success: false
            }
        });
        return false;
    }
};
