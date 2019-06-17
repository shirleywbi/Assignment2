import React from 'react';
import { connect } from 'react-redux';
import { addMessage, clearForm, updateName, updateMessage } from '../actions/index.js';

class MessageForm extends React.Component {
    render() {
        return(
        <div id="add-msg-block" className="content">
            <form id="add-msg-form" onSubmit={(e) => {e.preventDefault();}}>
                <h2 id="msg-header" className="header">MESSAGE</h2>
                <label className="form-label">
                    Name
                    <input id="name" type="text" className="form-item" value={this.props.formStore.name} onChange={(e) => this.props.updateName(e)}/>
                </label>
                <textarea id="text" className="form-item" rows="5" cols="70" placeholder="Enter your message" value={this.props.formStore.message} 
                          onChange={(e) => this.props.updateMessage(e)}></textarea>
                <br />
                <button className="mid-button button" onClick={() => this.props.addMessage(this.props.formStore.name, this.props.formStore.message)}>Add</button>
                <button className="mid-button button" onClick={() => this.props.clearForm()}>Clear</button>
            </form>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { addMessage, clearForm, updateName, updateMessage })(MessageForm);