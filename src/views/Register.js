import React from 'react';
import { connect } from 'react-redux';
import AccountRegisterForm from '../components/Form/RegisterForm';

const RegisterView = () => (
    <div>
        <AccountRegisterForm/>
    </div>
);

export default connect()(RegisterView);
