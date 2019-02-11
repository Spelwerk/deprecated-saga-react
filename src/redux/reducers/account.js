import ActionType from '../../constants/ActionType';

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    session: {
        expiry: 0,
        id: null,
        roles: {},
    },
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionType.ACCOUNT_SET_REFRESH:
            return {
                ...state,
                refreshToken: action.refreshToken,
            };

        case ActionType.ACCOUNT_SET_SESSION:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                accessToken: action.accessToken,
                session: action.session,
            };

        case ActionType.ACCOUNT_RESET_STATE:
            return initialState;

        default:
            return state;
    }
};
