import React from 'react';
import Button from './Button'
import { connect } from 'react-redux';

class Message extends React.Component {
    render() {
        return (<div>
            <li>
                <Button id="small-button" label="x"/>
            </li>
        </div>
        );
    }
}

export default connect()(Message);