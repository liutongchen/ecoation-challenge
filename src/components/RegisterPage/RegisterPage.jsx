import React from 'react';
import './RegisterPage.css';
import ReactPasswordStrength from 'react-password-strength';
import { withRouter } from 'react-router-dom';

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
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleNumberChange(event) {
        this.setState({ currentNumber: event.target.value });
    }

    handleCancel(event) {
        this.props.history.push("/");
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
                            onChange={this.handleEmailChange} />
                    </label>
                    <label className="password">
                        Password:
                        <ReactPasswordStrength
                            className="password"
                            minLength={5}
                            minScore={2}
                            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                            inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
                        />
                    </label>
                    <label>
                        Initial Number:
                        <input
                            type="text"
                            className="form-control"
                            name="initialNumber"
                            placeholder="0"
                            value={this.state.currentNumber}
                            onChange={this.handleNumberChange} />
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
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

export default withRouter(RegisterPage);