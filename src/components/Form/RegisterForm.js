import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../redux/actions/account';

import Button from '../Input/Button';
import Input from '../Input/Input';
import { onFormChange } from '../../utils/CoreUtils';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailExists: false,
        };
    }

    handleChange(event) {
        onFormChange(event, this.setState.bind(this), this.state);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { dispatch } = this.props;
        const { email } = this.state;

        dispatch(register(email));
    }

    render() {
        const { email } = this.state;

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
                <Button title='Register'/>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(RegisterForm);
