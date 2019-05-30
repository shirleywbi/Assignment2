import React from 'react';
import Nav from './Nav';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';
import styles from '../style.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MessageForm/>
      <MessageBoard/>
    </div>
  );
}

export default App;
