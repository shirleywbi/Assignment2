import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, selectMessage } from '../actions/index.js'
import MessageEditBox from './MessageEditBox.js';

class Message extends React.Component {
    render() {
        return (<div>
            <li className="msg-block" onClick={() => this.props.selectMessage(this.props.name, this.props.date, this.props.text, this.props.id)}> 
                <div className="msg">{this.props.name} says: "{this.props.text}"</div>
                <div className="msg-buttons">
                    <button className="small-button"
                        onClick={() => {this.props.editMessage(this.props.id);}}>e</button>
                    <button className="small-button"
                        onClick={() => {this.props.deleteMessage(this.props.id);}}>x</button>
                </div>
            </li>
            <li><MessageEditBox message={this.props}/></li>
        </div>
        );
    }
}

export default connect(null, { deleteMessage, selectMessage })(Message);