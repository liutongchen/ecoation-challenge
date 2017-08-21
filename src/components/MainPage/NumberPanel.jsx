import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Panel, Button } from 'react-bootstrap';
import {apiHost} from '../../config';
import * as numberActions from '../../actions/numberActions';

class NumberPanel extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            newNumber: null,
        };
    }

    updateNumber(currentNumber="inc") {
        const payload = {
            currentNumber: currentNumber,
        };

        const request = {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apiKey': this.props.user.apiKey,
            },
            body: JSON.stringify(payload),
        };

        const patchEndpoint = `${apiHost}/api/users/${this.props.user.id}/?fields=currentNumber`;

        this.props.actions.updateNumberStart();
        fetch(patchEndpoint, request)
            .then(response => response.json())
            .then(({currentNumber}) => this.props.actions.updateNumberSuccess(currentNumber))
            .catch(error => this.props.actions.updateNumberFailure(error));
    }

    handleChange(event) {
        this.setState({
            newNumber: event.target.value,
        });
    }

    render() {
        const title = (
            <h3>Current Number:</h3>
        );

        return (
            <Panel header={title}>
                <input value={this.props.user.currentNumber} onChange={this.handleChange} />
                <Button bsStyle="primary" onClick={() => this.updateNumber()}>Increment</Button>
                <Button bsStyle="primary" onClick={() => this.updateNumber(this.state.newNumber)}>Set</Button>
            </Panel>
        );
    }
}

NumberPanel.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user.data,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(numberActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberPanel);