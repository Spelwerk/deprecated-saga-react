import ActionType from '../../constants/ActionType';
import APIService from '../../services/APIService';
import { getSavedLogin } from './account';
import { setError } from './messages';

const setPlural = () => async (dispatch) => {
    try {
        const plural = await APIService.GET({
            url: '/system/plural',
        });

        dispatch({ type: ActionType.CORE_SET_PLURAL, plural });
    } catch (err) {
        dispatch(setError(err));
    }
};

const setSchema = (table) => async (dispatch) => {
    try {
        const schema = await APIService.GET({
            url: `/system/schema/${table}`,
        });

        dispatch({ type: ActionType.CORE_SET_SCHEMA, table, schema });
    } catch (err) {
        dispatch(setError(err));
    }
};

export const loadApp = () => async (dispatch) => {
    await dispatch(getSavedLogin());
    await dispatch(setPlural());
    dispatch({ type: ActionType.CORE_APP_LOADED });
};
