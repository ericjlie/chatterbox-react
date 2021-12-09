import React from 'react';
const MessageListEntry = (props) => {
  return (
    <div class="chat">
      <div class="username">{props.message.username}</div>
      <div>{props.message.text}</div>
    </div>
  )
}

export default MessageListEntry;