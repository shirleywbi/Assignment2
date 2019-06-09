import React from 'react';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';

class Home extends React.Component {
    render() {
        return     <div className="App">
        <MessageForm/>
        <br/>
        <br/>
        <br/>
        <MessageBoard/>
      </div>;
    }
}

export default Home;