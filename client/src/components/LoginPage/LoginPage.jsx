import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Email Address"
                        required=""
                        autofocus=""
                        value={this.state.email}
                        onChange={this.handleEmailChange} />

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        required=""
                        value={this.state.password} 
                        onChange={this.handlePasswordChange}/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Login
            </button>
                </form>
            </div>
        );
    }
}

export default LoginPage;