import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { setError } from '../../redux/actions/messages';
import ErrorType from '../../constants/ErrorType';

const mapStateToProps = (state) => ({
    isLoggedIn: state.account.isLoggedIn,
});

class PrivateRoute extends Component {
    render() {
        const { dispatch, isLoggedIn, component: Component, ...rest } = this.props;

        if (!isLoggedIn) {
            dispatch(setError(ErrorType.NOT_LOGGED_IN));
        }

        return (
            <Route {...rest} render={(props) => (
                isLoggedIn === true
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )}/>
        );
    }
}

PrivateRoute.propTypes = {
    dispatch: PropTypes.func,
    isLoggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(PrivateRoute);
