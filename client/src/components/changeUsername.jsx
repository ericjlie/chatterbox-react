import React from 'react';

const ChangeUsername = (props) => {
  return (
    <div>
      <input ref={newUsername} type='text'/>
      <button onClick={()=>props.changeUsernameHandler(newUsername.current.value)}>Change Username</button>
    </div>
  )
}
let newUsername = React.createRef();
export default ChangeUsername