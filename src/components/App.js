import React from 'react';
import Nav from './Nav';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MessageForm/>
      <br/>
      <br/>
      <br/>
      <MessageBoard/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { messages: state.messages};
};

export default connect(mapStateToProps)(App);
