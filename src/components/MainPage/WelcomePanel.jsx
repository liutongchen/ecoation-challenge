import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Panel } from 'react-bootstrap';

const title = (
    <h3>
        Welcome to IIaaS
    </h3>
);

const WelcomePanel = () => (
    <Panel header={title}>
        Content
    </Panel>
);

export default WelcomePanel;