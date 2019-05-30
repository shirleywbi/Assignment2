import React from 'react';
import { connect } from 'react-redux';

class Button extends React.Component {
    render() {
        return (
            <button className="button" onClick={this.props.action}>{this.props.label}</button>
        );
    }
}

export default connect()(Button);