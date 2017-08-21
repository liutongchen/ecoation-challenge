import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Panel } from 'react-bootstrap';
import './MainPage.css';

const title = (
    <h3>
        Welcome to IIaaS
    </h3>
);

const WelcomePanel = () => (
    <Panel header={title}>
        <img id="welcomeLogo" src="https://www.tcsion.com/dotcom/TCSSMB/images/SVG/cloudplus_icon.svg" alt="logo" />
        <div id="welcomeContent">
            <h1>Incrementing Integer as a Service</h1>
            <p>This is a single page application where users can increment their stored number by one and set their number. </p>
            <p>Please <b>login/register</b> to use. </p>
        </div>
    </Panel>
);

export default WelcomePanel;