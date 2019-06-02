import React from 'react';
import { connect } from 'react-redux';

class MessageSideBar extends React.Component {
    render() {
        return (
            <div className="slideable" id="sidebar">
                <p>Name: {this.props.name}</p>
                <p>Message: {this.props.message}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(MessageSideBar);