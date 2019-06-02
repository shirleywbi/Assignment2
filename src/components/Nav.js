import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return(<div>
            <Router>
                <ul className="nav-bar">
                    <li className="nav-list"><a className="nav-link" href="main.html">Home</a></li>
                    {/* <li className="nav-list nav-link"><Link to="/">Home</Link></li>
                    <li className="nav-list nav-link"><Link to="/about/">About</Link></li> */}
                </ul>
            </Router>
        </div>
        );
    }
}
