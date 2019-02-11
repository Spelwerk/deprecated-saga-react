import React from 'react';
import PropTypes from 'prop-types';

const AppMessage = (props) => {
    const { handleClick, message } = props;
    const { uuid, title, details } = message;

    return(
        <div>
            <div>{title}</div>
            <div>{details}</div>
            <button type='button' onClick={handleClick} value={uuid}>remove</button>
        </div>
    );
};

AppMessage.propTypes = {
    handleClick: PropTypes.func,
    message: PropTypes.object,
};

export default AppMessage;
