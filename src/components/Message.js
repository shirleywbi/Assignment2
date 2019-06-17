import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage, selectMessage } from '../actions/index.js'

class Message extends React.Component {
    render() {
        return (<div>
            <li className="msg" onClick={() => this.props.selectMessage(this.props.name, this.props.date, this.props.text, this.props.id)}> 
                <button className="small-button" id="small-button" 
                        onClick={() => {this.props.deleteMessage(this.props.id);}}>x</button>
                <div>{this.props.name} says: "{this.props.text}"</div>
            </li>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { deleteMessage, selectMessage })(Message);