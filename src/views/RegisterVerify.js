import React, { Component } from 'react';
import { connect } from 'react-redux';

import APIService from '../services/APIService';
import { setError } from '../redux/actions/messages';
import ErrorType from '../constants/ErrorType';
import AccountVerifyForm from '../components/Form/RegisterVerifyForm';
import { Redirect } from 'react-router';

class RegisterVerifyView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exists: true,
        };
    }

    componentDidMount() {
        const { email } = this.props.match.params;

        APIService.GET({
            url: `/accounts/exists/email/${email}`,
        }).then(({ exists }) => {
            this.setState({ exists });
        });
    }

    render() {
        const { exists } = this.state;
        const { dispatch } = this.props;
        const { email, secret } = this.props.match.params;

        if (!exists) {
            dispatch(setError(ErrorType.EMAIL_MISSING));
            return <Redirect to='/' />;
        }

        return (
            <div>
                <AccountVerifyForm email={email} secret={secret}/>
            </div>
        );
    }
}

export default connect()(RegisterVerifyView);
