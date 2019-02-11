import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';

import { loadApp } from './redux/actions/core';

import LoadingScreen from './components/LoadingScreen';
import Menu from './components/Menu';
import Home from './views/Root';
import AccountLogin from './views/Login';
import AccountRegister from './views/Register';
import AccountVerify from './views/RegisterVerify';
import AppMessageContainer from './components/AppMessage/AppMessageContainer';

const mapStateToProps = (state) => ({
    isAppLoaded: state.core.isAppLoaded,
});

class AppRouter extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadApp());
    }

    render() {
        const { isAppLoaded } = this.props;

        if (!isAppLoaded) {
            return <LoadingScreen/>;
        }

        return (
            <div>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={AccountLogin}/>
                    <Route path="/register" exact component={AccountRegister}/>
                    <Route path="/register/verify/:email/:secret" component={AccountVerify}/>
                </Switch>
                <AppMessageContainer/>
            </div>
        );
    }
}

AppRouter.propTypes = {
    dispatch: PropTypes.func,
    isAppLoaded: PropTypes.bool,
};

export default withRouter(connect(mapStateToProps)(AppRouter));
