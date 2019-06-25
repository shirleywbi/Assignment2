import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './HomePage';
import AboutPage from './About';

function AppRouter() {
    return(
        <Router>
            <div>
                <nav>
                    <ul className="nav-bar">
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        {/* <li className="nav-link"><Link to="/about/">About</Link></li> */}
                    </ul>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={AboutPage} />
            </div>
        </Router>
    );
}

export default AppRouter;