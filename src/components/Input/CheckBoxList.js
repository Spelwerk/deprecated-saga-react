import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

const CheckBoxList = (props) => {
    let array = [];

    for (let key in props.list) {
        const item = props.list[key];
        array.push(<CheckBox
            name={props.name}
            key={key}
            value={key}
            label={item.label}
            checked={!!props.checked[key]}
            handleChange={props.handleChange}
        />);
    }

    return (
        <div>
            <div>{props.title}</div>
            <div>{array}</div>
        </div>
    );
};

CheckBoxList.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.object,
    list: PropTypes.object,
    handleChange: PropTypes.func,
};

export default CheckBoxList;
