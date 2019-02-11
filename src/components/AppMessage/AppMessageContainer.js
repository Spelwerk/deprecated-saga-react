import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { unsetError, unsetMessage } from "../../redux/actions/messages";
import AppError from './AppError';
import AppMessage from "./AppMessage";

const mapStateToProps = (state) => ({
    errors: state.messages.errors,
    messages: state.messages.messages,
});

const mapDispatchToProps = dispatch => ({
    unsetError: (value) => dispatch(unsetError(value)),
    unsetMessage: (value) => dispatch(unsetMessage(value)),
});

class AppMessageContainer extends Component {
    handleClickError(event) {
        const { value } = event.target;
        unsetError(value);
    }

    handleClickMessage(event) {
        const { value } = event.target;
        unsetMessage(value);
    }

    render() {
        const { errors, messages } = this.props;

        return (
            <div>
                <div>
                    {errors.map((error, i) =>
                        <AppError key={i} error={error} handleClick={this.handleClickError.bind(this)}/>
                    )}
                </div>
                <div>
                    {messages.map((message, i) =>
                        <AppMessage key={i} message={message} handleClick={this.handleClickMessage.bind(this)}/>
                    )}
                </div>
            </div>
        );
    }
}

AppMessageContainer.propTypes = {
    errors: PropTypes.array,
    messages: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppMessageContainer);
