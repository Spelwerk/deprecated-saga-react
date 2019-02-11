import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { setError } from '../../redux/actions/messages';
import ErrorType from '../../constants/ErrorType';

const mapStateToProps = (state) => ({
    isLoggedIn: state.account.isLoggedIn,
    roles: state.account.session.roles,
});

class AdminRoute extends Component {
    render() {
        const { dispatch, isLoggedIn, roles, component: Component, ...rest } = this.props;

        if (!isLoggedIn) {
            dispatch(setError(ErrorType.NOT_LOGGED_IN));
        }

        if (!roles.ADMIN) {
            dispatch(setError(ErrorType.NOT_ADMINISTRATOR));
        }

        return (
            <Route {...rest} render={(props) => (
                isLoggedIn === true && roles.ADMIN
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )}/>
        );
    }
}

AdminRoute.propTypes = {
    dispatch: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    roles: PropTypes.object,
};

export default connect(mapStateToProps)(AdminRoute);
