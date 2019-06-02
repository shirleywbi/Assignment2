import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { deleteAllMessage } from '../actions/index.js';

class MessageBoard extends React.Component {
    render() {
        const { messages } = this.props.messages;
        const mappedMessages = messages.map(message => <Message name={ message.name } text={ message.text } index={ message.index }/>);

        return (
        <div id="msg-block">
            <div className="content">
                <h2 id="msg-board-header" className="header">MESSAGE BOARD</h2>
                <button className='mid-button button' onClick={() => this.props.deleteAllMessage()}>Clear All</button>
                <ul id="msg-list">{ mappedMessages }</ul>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { deleteAllMessage })(MessageBoard);