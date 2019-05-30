import React from 'react';
import Button from './Button';
import Message from './Message';
import { connect } from 'react-redux';

class MessageBoard extends React.Component {
    render() {
        return (
        <div id="msg-block content">
            <div className="content">
                <h2 id="msg-board-header" className="header">MESSAGE BOARD</h2>
                <Button label="Clear All" onclick="clearAll();"/>
                <ul id="msg-list"></ul>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { messages: state.messages };
}

export default connect()(MessageBoard);