import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => (
    <div>
        <label htmlFor={`${props.name}-${props.value}`}>{props.label}</label>
        <input
            type='checkbox'
            id={`${props.name}-${props.value}`}
            value={props.value}
            name={props.name}
            checked={props.checked}
            onClick={props.handleChange}
        />
    </div>
);

CheckBox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    handleChange: PropTypes.func,
};

export default CheckBox;
