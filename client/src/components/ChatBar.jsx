import React from 'react';

const ChatBar = (props) => {
  return (
    <div>
      <input ref={messageInput} type='text'/>
      <button onClick={()=>props.sendMessageHandler(messageInput.current.value)}>Send Message</button>
    </div>
  )
}
let messageInput = React.createRef();
export default ChatBar