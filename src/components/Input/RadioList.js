import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';

const RadioList = (props) => {
    let array = [];

    for (let key in props.list) {
        const item = props.list[key];
        array.push(<Radio
            name={props.name}
            key={key}
            value={key}
            label={item.label}
            checked={props.selected === key}
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

RadioList.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    selected: PropTypes.string,
    list: PropTypes.object,
    handleChange: PropTypes.func,
};

export default RadioList;
