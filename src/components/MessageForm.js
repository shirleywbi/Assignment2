import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
    render() {
        return(
        <div id="add-msg-block" class="content">
            <form id="add-msg-form" onsubmit="return false">
                <h2 id="msg-header" class="header">MESSAGE</h2>
                <label class="form-label">
                    Name
                    <input id="name" type="text" class="form-item"/>
                </label>
                <textarea id="new-msg" class="form-item" rows="5" cols="70" placeholder="Enter your message"></textarea>
                <br />
                <Button label="Add" onClick="addNewMessage();"/>
                <Button label="Clear" onClick="clearForm();"/>
            </form>
        </div>);
    }
}

export default connect()(MessageForm);