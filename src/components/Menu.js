import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/account';

const mapStateToProps = (state) => ({
    isLoggedIn: state.account.isLoggedIn,
});

class Menu extends Component {
    handleLogout() {
        const { dispatch } = this.props;
        dispatch(logout());
    }

    render() {
        const { isLoggedIn } = this.props;

        return (
            <nav>
                <NavLink to='/'>Home</NavLink>
                { !isLoggedIn ? <NavLink to='/login'>Login</NavLink> : <a onClick={this.handleLogout.bind(this)}>Logout</a> }
            </nav>
        );
    }
}

Menu.propTypes = {
    isLoggedIn: PropTypes.bool,
    dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Menu);
