import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '../components/Form/LoginForm';

const LoginView = () => (
    <div>
        <LoginForm/>
        <NavLink to='/register'>Register</NavLink>
    </div>
);

export default connect()(LoginView);
