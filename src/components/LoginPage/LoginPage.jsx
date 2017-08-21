import React from 'react';
import './LoginPage.css';
import { withRouter } from 'react-router-dom';

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
                        className="btn btn-lg btn-primary btn-block" 
                        type="submit"
                        onClick={handleLogin}>
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

export default withRouter(LoginPage);