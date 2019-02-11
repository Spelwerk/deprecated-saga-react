import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
    <div>
        <label htmlFor={props.name}>{props.title}</label><br/>
        <input
            id={props.name}
            name={props.name}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            required={props.required}
            min={props.min}
            max={props.max}
            autoFocus={props.autoFocus}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            autoComplete={props.type === 'password' ? 'off' : 'on'}
        />
    </div>
);

Input.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    autoFocus: PropTypes.bool,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
};

export default Input;
