import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { fetchMessages, deleteAllMessage } from '../actions/index.js';
import MessageSideBar from './MessageSideBar.js';

class MessageBoard extends React.Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const { error, loading, messages } = this.props.messageStore;
        let output = null;
        // console.log(this.props);
        if (error) {
            output = "Error.";
        } else if (loading) {
            output = "Loading...";
        } else if (messages !== []) {
            output = messages.map(message => <Message name={ message.name } date={ message.date } text={ message.text } key={ message.index }/>);
        }
        return (
        <div id="msg-block">
            <div className="content">
                <h2 id="msg-board-header" className="header">MESSAGE BOARD</h2>
                <button className='mid-button button' onClick={() => this.props.deleteAllMessage()}>Clear All</button>
                <ul id="msg-list">{ output }</ul>
            </div>
            {!this.props.popupStore.hidden && <MessageSideBar hidden={this.props.popupStore.hidden} name={this.props.popupStore.name} 
            message={this.props.popupStore.message} date={this.props.popupStore.date} index={this.props.popupStore.index} />}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { deleteAllMessage, fetchMessages })(MessageBoard);