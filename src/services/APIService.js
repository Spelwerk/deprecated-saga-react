import axios from 'axios';
import TokenKey from '../constants/TokenKey';

const configuration = {
    baseURL: 'http://localhost:4000',
    timeout: 5000,
    auth: {
        username: 'id',
        password: 'secret',
    },
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};

const APIService = async ({ dispatch, method, url, data, accessToken, refreshToken }) => {
    let options = { ...configuration, method, url, data };

    if (accessToken) {
        options.headers[TokenKey.ACCESS_TOKEN] = accessToken;
    }

    if (refreshToken) {
        options.headers[TokenKey.REFRESH_TOKEN] = refreshToken;
    }

    try {
        const response = await axios(options);
        const { data } = response;

        return data;
    } catch (error) {
        const { response } = { ...error };
        const { data } = response;

        throw data;
    }
};

const GET = async (args) => await APIService({ ...args, method: 'get' });

const POST = async (args) => await APIService({ ...args, method: 'post' });

const PUT = async (args) => await APIService({ ...args, method: 'put' });

const DELETE = async (args) => await APIService({ ...args, method: 'delete' });

export default {
    GET,
    POST,
    PUT,
    DELETE,
};
