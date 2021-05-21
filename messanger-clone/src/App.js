import React , { useState,useEffect } from 'react';
import './App.css';
import { Button,InputLabel,Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Message from './Message';
// import { Card } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/analytics';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
// import SendIcon from '@material-ui/icons/Send';


function App() {

  const [input,setInput] = useState('');
  const [messages,setMessage] = useState([]);
          // {username:'sk', message: 'hey sam'},
          // {username:'sam', message: 'hey sk'} 
        // ]);

  const [username,setUsername] = useState('');

        useEffect(()=>{ db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
  setMessage(snapshot.docs.map(doc => ({id :doc.id, message:doc.data()})))

})
        },[])

  useEffect(() => {
      setUsername (prompt('Enter your name'));
  }, [])

  // console.log(input);
  // console.log(message);

const sendMessage = (event) =>{
  event.preventDefault();  
  
  //disable referesh buttion
  db.collection('messages').add({
    message:input,
    username:username,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

    // setMessage([...messages, {username: username, message: input}]);
    setInput('');
  } 

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=130&h=130"/>
    
    <h1>Facebook messanger</h1>
    <h2>welcome {username}</h2>


   <form className="app__form">
  
   <FormControl className="app__formControl" >
  
      <Input className="app__input" placeholder='Enter your message...' value={input} onChange ={event => setInput(event.target.value)}/>
      <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
        <SendIcon></SendIcon>
      </IconButton>

    </FormControl>
  
      </form>    
    
    <FlipMove>
    {
      messages.map(({id,message}) => (
        <Message  key = {id} username={username} message ={message}/>
        
        ))
      }
    </FlipMove>
   

    </div>
  );
}

export default App;
