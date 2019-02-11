import UUIDv4 from 'uuid/v4';

export const getUUID = () => {
    return UUIDv4();
};

export const onFormChange = (event, setState, state) => {
    const { target } = event;
    const { name, value, type } = target;

    if (type === 'checkbox') {
        const { checked } = target;

        setState({
            [name]: {
                ...state[name],
                [value]: checked,
            },
        });

        return;
    }

    setState({ [name]: value });
};
