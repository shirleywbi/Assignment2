import React from 'react';
import { connect } from 'react-redux';

class Nav extends React.Component {
    render() {
        return(<div>
            <ul class="nav-bar">
                <li class="nav-list"><a class="nav-link" href="main.html">Home</a></li>
                <li class="nav-list"><a class="nav-link" href="about.html">About</a></li>
            </ul>
        </div>
        );
    }
}

export default connect()(Nav);