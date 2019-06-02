import React from 'react';

export default class Nav extends React.Component {
    render() {
        return(<div>
            <ul className="nav-bar">
                <li className="nav-list"><a className="nav-link" href="main.html">Home</a></li>
                <li className="nav-list"><a className="nav-link" href="about.html">About</a></li>
            </ul>
        </div>
        );
    }
}
