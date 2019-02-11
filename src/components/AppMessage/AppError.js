import React from 'react';
import PropTypes from 'prop-types';

const AppError = (props) => {
    const { handleClick, error } = props;
    const { uuid, title, details } = error;

    return(
        <div>
            <div>{title}</div>
            <div>{details}</div>
            <button type='button' onClick={handleClick} value={uuid}>remove</button>
        </div>
    );
};

AppError.propTypes = {
    handleClick: PropTypes.func,
    error: PropTypes.object,
};

export default AppError;
