import { getUUID } from '../utils/CoreUtils';

export default {
    EMAIL_MISSING: {
        name: 'AccountVerifyEmailError',
        title: 'Email not found',
        details: 'Could not find the email provided on the server.',
        uuid: getUUID(),
    },
    NOT_LOGGED_IN: {
        name: 'NotLoggedInError',
        title: 'Not Logged In',
        details: 'You are not logged in. Redirecting to /login',
        uuid: getUUID(),
    },
    NOT_ADMINISTRATOR: {
        name: 'NotAdministratorError',
        title: 'Not Administrator',
        details: 'You are not an administrator. Redirecting to /login',
        uuid: getUUID(),
    },
};
