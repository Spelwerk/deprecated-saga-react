import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginWithPassword } from '../../redux/actions/account';
import { onFormChange } from '../../utils/CoreUtils';

import Button from '../Input/Button';
import Input from '../Input/Input';
import CheckBoxList from '../Input/CheckBoxList';
import RadioList from '../Input/RadioList';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSubmitEnabled: false,
            email: '',
            password: '',

            checkbox: {},
            checkboxList: {
                1: { label: 'check 1' },
                2: { label: 'check 2' },
            },

            radio: '',
            radioList: {
                1: { label: 'radio 1' },
                2: { label: 'radio 2' },
            }
        };
    }

    handleChange(event) {
        onFormChange(event, this.setState.bind(this), this.state);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(loginWithPassword(email, password));
    }

    render() {
        const { email, password, checkbox, checkboxList, radio, radioList } = this.state;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Input
                    title='Email'
                    name='email'
                    type='email'
                    value={email}
                    placeholder='your@email.here'
                    handleChange={this.handleChange.bind(this)}
                />
                <br/>
                <Input
                    title='Password'
                    name='password'
                    type='password'
                    value={password}
                    placeholder='password'
                    handleChange={this.handleChange.bind(this)}
                />
                <br/>
                <RadioList
                    title='Test Radio'
                    name='radio'
                    selected={radio}
                    list={radioList}
                    handleChange={this.handleChange.bind(this)}
                />
                <br/>
                <CheckBoxList
                    title='Test Checkbox'
                    name='checkbox'
                    checked={checkbox}
                    list={checkboxList}
                    handleChange={this.handleChange.bind(this)}
                />
                <br/>
                <Button title='Login'/>
            </form>
        );
    }
}

LoginForm.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(LoginForm);
