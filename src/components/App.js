import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
