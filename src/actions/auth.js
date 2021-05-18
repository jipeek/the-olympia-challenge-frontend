import * as authTypes from "./types/auth";
import * as userTypes from "./types/user";
import axios from "axios";
import * as localStorageUtil from "../utilities/localStorage";
import { getUserById } from "./user";

const REACT_APP_URL_API = 'https://api.jipeek.com';

const parseJwt = token => {
    if (!token) {
        return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
};
export const login = (username, password) => async dispatch => {
    dispatch({
        type: authTypes.LOGIN_LOADING,
        payload: { loading: true }
    });
    try {
        console.log('username, password', username, password)
        const authToken = await axios.post(`${REACT_APP_URL_API}/token/`, {
            username,
            password
        });
        console.log('authToken', authToken)
        localStorageUtil.saveObject("token", authToken.data);
        localStorageUtil.save("tokenInitDate", new Date().getTime());
        localStorageUtil.save("refreshToken", false);
        dispatch({
            type: authTypes.LOGIN_SUCCESS,
            payload: {
                auth: authToken.data,
                loading: false,
                success: true
            }
        });
        return true;
    } catch (e) {
        dispatch({
            type: authTypes.LOGIN_FAILURE,
            payload: {
                loading: false,
                success: false
            }
        });
        return false;
    }
};

export const checkingAuth = updataDataUser => async dispatch => {
    console.log("checkingAuth", updataDataUser);
    const token = localStorageUtil.loadObject("token") || false;
    if (token) {
        const dataToken = parseJwt(token.access);
        const userId = dataToken.user_id;
        let resultUser = await dispatch(getUserById(userId, updataDataUser));
        if (!resultUser.status && resultUser.refresh) {
            resultUser = await dispatch(getUserById(userId, updataDataUser));
        }
        await dispatch(checkingFinish());
    } else {
        await dispatch(logout());
        await dispatch(checkingFinish());
    }
};

export const checkingFinish = () => ({
    type: userTypes.AUTH_CHECKING_FINISH,
    payload: {
        checking: false
    }
});

export const refreshToken = () => async dispatch => {
    dispatch({
        type: authTypes.REFRESH_TOKEN_LOADING,
        payload: { loading: true }
    });
    try {
        console.log("refresh token 💛💦");
        localStorageUtil.save("refreshToken", true);
        const token = localStorageUtil.loadObject("token");
        const authToken = await axios.post(`${REACT_APP_URL_API}/token/refresh/`, {
            refresh: token.refresh
        });
        token.access = authToken.data.access;
        localStorageUtil.saveObject("token", token);
        dispatch({
            type: authTypes.REFRESH_TOKEN_SUCCESS,
            payload: {
                auth: token,
                loading: false,
                success: true
            }
        });
        return true;
    } catch (e) {
        dispatch({
            type: authTypes.REFRESH_TOKEN_FAILURE,
            payload: {
                loading: false,
                success: false
            }
        });
        return false;
    }
};

export const logout = () => async dispatch => {
    dispatch({
        type: authTypes.LOGIN_LOADING,
        payload: { loading: true }
    });
    try {
        localStorageUtil.clear();
        dispatch({
            type: authTypes.LOGIN_SUCCESS,
            payload: {
                auth: {},
                loading: false,
                success: true
            }
        });
        dispatch({
            type: userTypes.LOGOUT_USER_FINISH
        });
        return true;
    } catch (e) {
        dispatch({
            type: authTypes.LOGOUT_FAILURE,
            payload: {
                loading: false,
                success: false
            }
        });
        return false;
    }
};
