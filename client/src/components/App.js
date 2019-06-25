// Reference: https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
