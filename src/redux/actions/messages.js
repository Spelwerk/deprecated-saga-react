import ActionType from '../../constants/ActionType';
import { unsetStorage } from "../../utils/LocalStorageUtils";
import LocalStorageKey from '../../constants/LocalStorageKey';

export const setError = (error) => (dispatch) => {
    switch (error.name) {
        case 'AccountInvalidTokenError':
            unsetStorage(LocalStorageKey.REFRESH_TOKEN);
            dispatch({ type: ActionType.ACCOUNT_RESET_STATE });
            break;
        default:
            break;
    }

    dispatch({ type: ActionType.ERROR_SET, error });
};

export const unsetError = (uuid) => ({ type: ActionType.ERROR_UNSET, uuid });

export const setMessage = (messageType) => {
    return {
        type: ActionType.MESSAGE_SET,
        title: messageType.title,
        details: messageType.details,
        uuid: messageType.uuid,
    };
};

export const unsetMessage = (uuid) => ({ type: ActionType.MESSAGE_UNSET, uuid });
