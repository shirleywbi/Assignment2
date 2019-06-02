import React from 'react';
import { connect } from 'react-redux';
import { addMessage, clearForm } from '../actions/index.js';

class MessageForm extends React.Component {
    addMessage() {
        this.props.dispatch(addMessage(this.props.name, this.props.text, this.props.index));
    }
    clearForm() {
        this.props.dispatch(clearForm());
    }
    render() {
        return(
        <div id="add-msg-block" className="content">
            <form id="add-msg-form" onSubmit={(e) => {e.preventDefault();}}>
                <h2 id="msg-header" className="header">MESSAGE</h2>
                <label className="form-label">
                    Name
                    <input id="name" type="text" className="form-item"/>
                </label>
                <textarea id="new-msg" className="form-item" rows="5" cols="70" placeholder="Enter your message"></textarea>
                <br />
                <button className="mid-button button" onClick={this.addMessage.bind(this)}>Add</button>
                <button className="mid-button button" onClick={this.clearForm.bind(this)}>Clear</button>
            </form>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(MessageForm);