import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerVerify } from '../../redux/actions/account';

import Button from '../Input/Button';
import Input from '../Input/Input';
import { onFormChange } from '../../utils/CoreUtils';
import APIService from '../../services/APIService';

class RegisterVerifyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            password: '',
            displayNameExists: false,
        };
    }

    handleChange(event) {
        onFormChange(event, this.setState.bind(this), this.state);
    }

    handleBlur() {
        const { displayName } = this.state;

        if (displayName === '') {
            return this.setState({ displayNameExists: false });
        }

        APIService.GET({
            url: `/accounts/exists/display-name/${displayName}`,
        }).then(({ exists }) => {
            this.setState({ displayNameExists: exists });
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { dispatch, email, secret } = this.props;
        const { displayName, password } = this.state;

        dispatch(registerVerify(email, secret, displayName, password));
    }

    render() {
        const { displayName, password, displayNameExists } = this.state;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Input
                    title='Display Name'
                    name='displayName'
                    type='text'
                    value={displayName}
                    handleChange={this.handleChange.bind(this)}
                    handleBlur={this.handleBlur.bind(this)}
                />
                {displayNameExists ? <div>The display name is already in our database</div> : null}
                <br/>
                <Input
                    title='Password'
                    name='password'
                    type='password'
                    value={password}
                    handleChange={this.handleChange.bind(this)}
                />
                <br/>
                <Button title='Verify'/>
            </form>
        );
    }
}

RegisterVerifyForm.propTypes = {
    dispatch: PropTypes.func,
    email: PropTypes.string,
    secret: PropTypes.string,
};

export default connect()(RegisterVerifyForm);
