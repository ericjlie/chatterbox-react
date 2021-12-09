import React from 'react';
import MessageEntry from './MessageEntry.jsx'
const MessageList = (props) => {
  let renderView;
  if(props.currentRoom === undefined) {
    renderView = props.messages;
  } else {
    renderView = props.messages.filter((i) => {return i.roomname === props.currentRoom});
  }
  return (
    <div>{renderView.map((message)=>(<MessageEntry message={message}/>))}</div>
  )
}

export default MessageList;
