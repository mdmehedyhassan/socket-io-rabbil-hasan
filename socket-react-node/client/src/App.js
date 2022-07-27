import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

const App = () => {
  const [message, setMessage] = useState('')
  useEffect(() =>{
    const socket = io.connect('/')
    socket.on('msg',(data)=> {
      setMessage(data)
    })
  },[])
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Your have a message: {message}</p>
    </div>
  );
};

export default App;