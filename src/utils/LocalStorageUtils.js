export const setStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const unsetStorage = (key) => {
    localStorage.removeItem(key);
};

export const getStorage = (key) => {
    return localStorage.getItem(key);
};
