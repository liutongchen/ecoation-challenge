import React from 'react';
import './RegisterPage.css';

class RegisterPage extends React.Component {
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
                    <h2 className="form-signin-heading">Please Register</h2>
                    <label>
                        Email: 
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Email Address"
                            required=""
                            autofocus=""
                            value={this.state.email}
                            onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            required=""
                            value={this.state.password} 
                            onChange={this.handlePasswordChange}/>
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Register
                    </button>
                </form>
            </div>
        );
    }
}

export default RegisterPage;