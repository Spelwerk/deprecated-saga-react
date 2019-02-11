import { getUUID } from '../utils/CoreUtils';

export default {
    ACCOUNT_REGISTER_SUCCESS: {
        title: 'Success',
        details: 'Your account has been created and a verification email has been sent. You must verify your account before you can proceed.',
        uuid: getUUID(),
    },
    ACCOUNT_VERIFY_SUCCESS: {
        title: 'Success',
        details: 'Your account has been verified.',
        uuid: getUUID(),
    },
}
