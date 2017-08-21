import React from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPasswordStrength from 'react-password-strength';

import { apiHost } from '../../config';
import './RegisterPage.css';
import * as registerActions from '../../actions/registerActions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            currentNumber: "",
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange({ score, isValid, password }) {
        this.setState({ password });
    }

    handleNumberChange(event) {
        this.setState({ currentNumber: event.target.value });
    }

    handleCancel(event) {
        this.props.history.push("/");
    }

    handleRegister(event) {
        this.props.actions.registerStart();
        const payload = {
            email: this.state.email,
            password: this.state.password,
            currentNumber: this.state.currentNumber,
        };

        const request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        };

        const registerEndpoint = apiHost + '/api/users';

        fetch(registerEndpoint, request)
            .then(response => response.json())
            .then(user => {
                this.props.actions.registerSuccess(user);
                this.props.history.push('/');
            })
            .catch(error => {
                this.props.actions.registerFailure(error);
                toastr.error("Register failed");
            });
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-register" onClick={e => { e.preventDefault() }}>
                    <h2 className="form-register-heading">Please Register</h2>
                    <label>
                        Email:
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            required />
                    </label>
                    <label className="password">
                        Password:
                        <ReactPasswordStrength
                            className="password"
                            minLength={5}
                            minScore={2}
                            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                            changeCallback={this.handlePasswordChange}
                            inputProps={{
                                value: this.state.password,
                                name: "password_input",
                                autoComplete: "off",
                                className: "form-control"
                            }}
                        />
                    </label>
                    <label>
                        Initial Number:
                        <input
                            type="text"
                            className="form-control"
                            name="initialNumber"
                            value={this.state.currentNumber}
                            onChange={this.handleNumberChange}
                            required />
                    </label>
                    <button
                        id="registerBtn"
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        disabled={!this.props.registerButtonEnabled}
                        onClick={this.handleRegister}>
                        Register
                    </button>
                    <button
                        className="btn btn-lg btn-danger btn-block"
                        type="submit"
                        onClick={this.handleCancel}>
                        Cancel
                    </button>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(registerActions, dispatch)
});

RegisterPage.propTypes = {
    actions: PropTypes.object.isRequired,
    registerButtonEnabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    registerButtonEnabled: state.ui.registerButtonEnabled,
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);