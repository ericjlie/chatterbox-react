import React from 'react';

const RoomChanger = (props) => {
  return (
    <div>
      <input ref={roomInput} type='text'/>
      <button onClick={()=>props.changeRoomHandler(roomInput.current.value)}>Change Room</button>
    </div>
  )
}
let roomInput = React.createRef();
export default RoomChanger