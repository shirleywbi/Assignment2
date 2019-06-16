import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';
import { deleteAllMessage } from '../actions/index.js';
import MessageSideBar from './MessageSideBar.js';

class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    componentDidMount() {
        fetch("http://localhost:9000/messages")
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
        console.log(this.state.apiResponse);
    }

    render() {
        const messages = this.state.apiResponse;
        console.log(this.state.apiResponse);
        let mappedMessages = null;
        if (messages !== "") {
            mappedMessages = messages.map(message => <Message name={ message.name } date={ message.date } text={ message.text } key={ message.index }/>);
        }
        return (
        <div id="msg-block">
            <div className="content">
                <h2 id="msg-board-header" className="header">MESSAGE BOARD</h2>
                <button className='mid-button button' onClick={() => this.props.deleteAllMessage()}>Clear All</button>
                <ul id="msg-list">{ mappedMessages }</ul>
            </div>
            {!this.props.popup.hidden && <MessageSideBar hidden={this.props.popup.hidden} name={this.props.popup.name} 
            message={this.props.popup.message} date={this.props.popup.date} index={this.props.popup.index} />}
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { deleteAllMessage })(MessageBoard);