import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { handleClick, style, type, title } = props;

    return(
        <button
            style={style}
            type={type}
            onClick={handleClick}
        >{title}</button>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    handleClick: PropTypes.func,
};

export default Button;
