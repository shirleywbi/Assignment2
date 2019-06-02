import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions/index.js'
import MessageSideBar from './MessageSideBar.js';

class Message extends React.Component {
    render() {
        return (<div>
            <li className="msg"> 
                <button className="small-button" id="small-button" 
                        onClick={() => {this.props.deleteMessage(this.props.index);}}>x</button>
                <div>{this.props.name} says: "{this.props.text}"</div>
                
            </li>
            <MessageSideBar/>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { deleteMessage })(Message);