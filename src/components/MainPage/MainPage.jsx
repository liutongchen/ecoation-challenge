import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import NumberPanel from './NumberPanel';
import WelcomePanel from './WelcomePanel';
import { logout } from '../../actions/loginActions';

const MainPage = ({ hasLoggedIn, dispatch }) => {
    const items = hasLoggedIn ?
        [
            {
                "text": "Logout",
                "onClick": () => { dispatch(logout()) },
            },
        ] :
        [
            {
                "text": "Login",
                "to": "/login",
            },
            {
                "text": "Register",
                "to": "/register",
            },
        ];

    return (
        <div>
            <Header items={items} />
            {hasLoggedIn ? <NumberPanel /> : <WelcomePanel />}
        </div>
    );
}

MainPage.propTypes = {
    hasLoggedIn: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    hasLoggedIn: state.user.hasLoggedIn,
});

export default connect(mapStateToProps)(MainPage);