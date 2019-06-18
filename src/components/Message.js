import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, toggleMessage, toggleEdit } from '../actions/index.js'
import MessageEditBox from './MessageEditBox.js';

class Message extends React.Component {
    render() {
        return (<div>
            <li className="msg-block" onClick={() => this.props.toggleMessage(this.props.name, this.props.date, this.props.text, this.props.id)}> 
                <div className="msg">{this.props.name} says: "{this.props.text}"</div>
                <div className="msg-buttons">
                    <button className="small-button"
                        onClick={() => {this.props.toggleEdit(this.props.id);}}>edit</button>
                    <button className="small-button"
                        onClick={() => {this.props.deleteMessage(this.props.id);}}>x</button>
                </div>
            </li>
            <li>
                {!this.props.editStore.hidden && <MessageEditBox hidden={this.props.editStore.hidden} 
                name={this.props.name} text={this.props.text} date={this.props.date} id={this.props.id}/>}
            </li>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newMessage: state.editStore.message,
        editStore: state.editStore
    };
}

export default connect(mapStateToProps, { deleteMessage, toggleMessage, toggleEdit })(Message);