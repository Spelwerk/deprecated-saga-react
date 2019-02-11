import accountReducer from './account';
import coreReducer from './core';
import messagesReducer from './messages';

export default {
    core: coreReducer,
    account: accountReducer,
    messages: messagesReducer,
};
