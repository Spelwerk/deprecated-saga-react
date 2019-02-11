import ActionType from '../../constants/ActionType';
import RouteKey from '../../constants/RouteKey';

const initialState = {
    isAppLoaded: false,
    plural: null,
    schema: null,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionType.CORE_APP_LOADED:
            return {
                ...state,
                isAppLoaded: true,
            };

        case ActionType.CORE_SET_PLURAL:
            return {
                ...state,
                plural: action.plural,
            };

        case ActionType.CORE_SET_SCHEMA:
            return {
                ...state,
                schema: {
                    ...state.schema,
                    [action.table]: action.schema,
                },
            };

        default:
            return state;
    }
};
