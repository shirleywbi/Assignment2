import React from 'react';
import { connect } from 'react-redux';
import { postEditMessage, updateEditBox } from '../actions/index.js'

class MessageEditBox extends React.Component {
    render() {
        return (
        <div id="edit-block" hidden={this.props.hidden}>
            <form id="edit-form" onSubmit={(e) => {e.preventDefault();}}>
                <h3 id="msg-header" className="header">EDIT</h3>
                <textarea id="text" className="form-item" rows="5" cols="70" defaultValue={this.props.message.text}
                    onChange={(e) => this.props.updateEditBox(e)}></textarea>
                <br />
                <button className="mid-button button" 
                    onClick={() => {console.log(this.props.newMessage);this.props.postEditMessage(this.props.message, this.props.newMessage);}}>Save</button>
            </form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newMessage: state.editStore.message
    };
}

export default connect(mapStateToProps, { postEditMessage, updateEditBox })(MessageEditBox);