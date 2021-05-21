// import React from 'react';
import { Card,CardContent,Typography } from '@material-ui/core';
import './Message.css';
import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';

const Message = forwardRef(({message,username},ref)=>{
    const isUser = username === message.username;
    return (
       <div ref={ref}className={`message ${isUser && 'message__user'}`}> 
         <Card className={ isUser ? "message__usercard" : "message__guestcard" }> 
             <CardContent>
                 <Typography
                     color="white"
                     variant ="h5"
                     component ="h2"

                     >{!isUser && `${message.username || 'Unknown person'}:`}{message.message}
                 </Typography>
             </CardContent>
         </Card>
         </div>
    )
})

export default Message
