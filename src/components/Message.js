import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions/index.js'
import MessageSideBar from './MessageSideBar.js';

class Message extends React.Component {
    deleteMessage() {
        this.props.dispatch(deleteMessage());
    }

    render() {
        return (<div>
            <li className="msg"> 
                <button className="small-button" id="small-button" 
                        onClick={this.deleteMessage.bind(this)}>x</button>
                <div>{this.props.name} says: "{this.props.text}"</div>
                
            </li>
            <MessageSideBar/>
        </div>
        );
    }
}

export default connect()(Message);