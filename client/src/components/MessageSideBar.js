import React from 'react';

export default class MessageSideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <p> <b>Name:</b> </p>
                <p> {this.props.name} </p>
                <p> <b>Date: </b></p>
                <p> {this.props.date} </p>
                <p> <b>Message: </b></p>
                <p> {this.props.message}</p>
            </div>
        );
    }
}