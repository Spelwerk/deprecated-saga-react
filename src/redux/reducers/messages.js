import ActionType from '../../constants/ActionType';

const initialState = {
    errors: [],
    messages: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionType.ERROR_SET:
            return {
                ...state,
                errors: [
                    ...state.errors,
                    action.error,
                ],
            };

        case ActionType.ERROR_UNSET:
            return {
                ...state,
                errors: state.errors.filter((error) => error.uuid !== action.uuid),
            };

        case ActionType.MESSAGE_SET:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        uuid: action.uuid,
                        title: action.title,
                        details: action.details,
                    },
                ],
            };

        case ActionType.MESSAGE_UNSET:
            return {
                ...state,
                messages: state.messages.filter((message) => message.uuid !== action.uuid),
            };

        default:
            return state;
    }
};
