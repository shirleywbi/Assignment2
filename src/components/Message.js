import React from 'react';
import { connect } from 'react-redux';

class Message extends React.Component {
    render() {
        return (<div>
            <li>
                <button>x</button>
            </li>
        </div>
        );
    }
}

export default connect()(Message);