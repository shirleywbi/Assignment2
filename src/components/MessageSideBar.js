import React from 'react';
import { connect } from 'react-redux';

class MessageSideBar extends React.Component {
    render() {
        return (
            <div class="slideable" id="sidebar">
                <p>Name: {this.props.name}</p>
                <p>Message: {this.props.message}</p>
            </div>
        );
    }
}

export default connect()(MessageSideBar);