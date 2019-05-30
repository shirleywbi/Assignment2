import React from 'react';
import Button from './Button';
import Message from './Message';
import { connect } from 'react-redux';

class MessageBoard extends React.Component {
    render() {
        return (<div>
            <h2 id="msg-header" class="header">MESSAGE BOARD</h2>
            <Button label="Clear All"/>
            <Message/>
            <Message/>
            <Message/>
        </div>
        );
    }
}

export default connect()(MessageBoard);