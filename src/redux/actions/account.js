import { push, goBack } from 'connected-react-router';

import APIService from '../../services/APIService';
import ActionType from '../../constants/ActionType';
import MessageType from '../../constants/MessageType';
import LocalStorageKey from "../../constants/LocalStorageKey";
import { getNow } from '../../utils/DateTimeUtils';
import { getStorage, setStorage, unsetStorage } from "../../utils/LocalStorageUtils";
import { setMessage, setError } from './messages';

export const getSavedLogin = () => async (dispatch) => {
    const refreshToken = getStorage(LocalStorageKey.REFRESH_TOKEN);

    if (typeof refreshToken === 'undefined' || refreshToken === null) return;

    dispatch({
        type: ActionType.ACCOUNT_SET_REFRESH,
        refreshToken,
    });
    await dispatch(refreshSession());
};

export const refreshSession = () => async (dispatch, getState) => {
    const now = getNow() - 15; // remove 15 seconds to give some leeway
    const { account } = getState();
    const { isLoggedIn, refreshToken } = account;

    if (isLoggedIn && now < account.session.expiry) {
        return;
    }

    try {
        const response = await APIService.GET({
            url: '/accounts/session',
            refreshToken,
        });

        const { accessToken, session } = response;

        dispatch({
            type: ActionType.ACCOUNT_SET_SESSION,
            isLoggedIn: true,
            accessToken,
            session,
        });
    } catch (err) {
        dispatch(setError(err));
    }
};

export const setLogin = (refreshToken, accessToken, session) => async (dispatch) => {
    setStorage(LocalStorageKey.REFRESH_TOKEN, refreshToken);
    dispatch({
        type: ActionType.ACCOUNT_SET_REFRESH,
        refreshToken,
    });
    dispatch({
        type: ActionType.ACCOUNT_SET_SESSION,
        isLoggedIn: true,
        accessToken,
        session,
    });
};

export const loginWithPassword = (email, password) => async (dispatch) => {
    try {
        const { refreshToken, accessToken, session } = await APIService.POST({
            url: '/accounts/login/password',
            data: {
                email,
                password,
            },
        });
        dispatch(setLogin(refreshToken, accessToken, session));
        dispatch(goBack());
    } catch (err) {
        dispatch(setError(err));
    }
};

export const logout = () => async (dispatch, getState) => {
    const { account } = getState();
    const { refreshToken } = account;

    try {
        await APIService.POST({
            url: '/accounts/logout',
            tokens: {
                refreshToken,
            },
        });
        unsetStorage(LocalStorageKey.REFRESH_TOKEN);
        dispatch({ type: ActionType.ACCOUNT_RESET_STATE });
        dispatch(push(`/`));
    } catch (err) {
        dispatch(setError(err));
    }
};

export const register = (email) => async (dispatch) => {
    try {
        await APIService.POST({
            url: '/accounts',
            data: {
                email,
            },
        });
        dispatch(setMessage(MessageType.ACCOUNT_REGISTER_SUCCESS));
        dispatch(push(`/`));
    } catch (err) {
        dispatch(setError(err));
    }
};

export const registerVerify = (email, secret, displayName, password) => async (dispatch) => {
    try {
        const { refreshToken, accessToken, session } = await APIService.POST({
            url: '/accounts/verify/secret',
            data: {
                email,
                secret,
                displayName,
                password,
            },
        });
        dispatch(setMessage(MessageType.ACCOUNT_VERIFY_SUCCESS));
        dispatch(setLogin(refreshToken, accessToken, session));
        dispatch(push(`/`));
    } catch (err) {
        dispatch(setError(err));
    }
};
