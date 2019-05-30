import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
    render() {
        return(<div>
            <h2 id="msg-header" class="header">MESSAGE</h2>
            <label class="form-label">
                Name
                <input id="name" type="text" class="form-item"></input>
            </label>
            <div>
                <textarea id="new-msg" class="form-item" rows="5" cols="70" placeholder="Enter your message"></textarea>
            </div>
            <Button label="Add"/>
            <Button label="Clear"/>
        </div>);
    }
}

export default connect()(MessageForm);