import React from 'react';
import './App.css';
import MessageForm  from './MessageForm';
import  Notifications  from 'react-notify-toast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MessageForm />
        <Notifications />
      </header>
    </div>
  );
}

export default App;
