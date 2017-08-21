import React from 'react';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import path from 'path';

import './LoginPage.css';
import { apiHost } from '../../config';
import * as loginActions from '../../actions/loginActions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleCancel(event) {
        this.props.history.push("/");
    }

    handleLogin(event) {
        this.props.actions.loginStart();

        const payload = {
            email: this.state.email,
            password: this.state.password,
        }
        const data = new FormData();
        data.append("json", JSON.stringify(payload));

        const request = {
            method: "POST",
            body: data,
        };

        const loginEndpoint = apiHost + '/api/login';

        fetch(loginEndpoint, request)
            .then(response => response.json())
            .then(user => {
                this.props.actions.loginSuccess(user);
                this.props.history.push('/');
            })
            .catch(() => {
                this.props.actions.loginFailure();
                toastr.error("Please check your email and password!")
            });
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin" onClick={e => { e.preventDefault() }}>
                    <h2 className="form-signin-heading">Please login</h2>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleEmailChange} />

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange} />

                    <button
                        id="loginBtn"
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        disabled={!this.props.loginButtonEnabled}
                        onClick={this.handleLogin}>
                        Login
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

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
    loginButtonEnabled: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loginActions, dispatch),
});

const mapStateToProps = state => ({
    loginButtonEnabled: state.ui.loginButtonEnabled,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);