import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Panel } from 'react-bootstrap';

const NumberPanel= ({number}) => {
    const title = (
        <h3>Current Number:</h3>
    );

    return(
        <Panel header={title}>
            {number}
        </Panel>
    );
}

NumberPanel.propTypes = {
    number: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    number: _.toInteger(state.user.data.currentNumber),
});

export default connect(mapStateToProps)(NumberPanel);