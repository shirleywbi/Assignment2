import React from 'react';
import { connect } from 'react-redux';

class Button extends React.Component {
    render() {
        return (
            <button>{this.props.label}</button>
        );
    }
}

export default connect()(Button);