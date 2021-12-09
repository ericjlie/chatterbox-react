import React from 'react';
import ChangeUsername from './changeUsername.jsx';
import RoomChanger from './RoomChanger.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import SearchMessages from './SearchMessages.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [{text: 'test message', username: 'Eric L', roomname: 'Hack Reactor'}],
      currentRoom: undefined,
      username: 'EricL'
    }
    //Function binds
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.sendMessageHandler = this.sendMessageHandler.bind(this);
    this.changeRoomHandler = this.changeRoomHandler.bind(this);
    this.dataSearchHandler = this.dataSearchHandler.bind(this);
  }

  //API call tester
  componentDidMount() {
    this.refreshData();
  }

  refreshData () {
    axios.get(`http://127.0.0.1:3001/classes/messages`)
        .then((response) => {
          console.log(response.data)
          this.setState({messages: response.data})
        })
  }

  changeUsernameHandler (user) {
    this.setState({username: user})
  }

  sendMessageHandler (text) {
    let sendbody = JSON.stringify({text: text, username: this.state.username, roomname: this.state.currentRoom});
    fetch('http://127.0.0.1:3001/classes/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: sendbody
    })
    .then(response => console.log(response))
  }

  changeRoomHandler (room) {
    this.setState({currentRoom: room})
  }

  dataSearchHandler (username, query) {
    let serachQuery = JSON.stringify({username: 'username', query: 'query'})
    fetch('http://127.0.0.1:3001/classes/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: serachQuery,
    })
  }

  render() {
    return (
    <div>
    <div id="main">
      <h1>chatterbox</h1>
      <div class="input" id="username">
        <span>Username: {this.state.username}</span>
        <span><ChangeUsername changeUsernameHandler={this.changeUsernameHandler}/></span>
      </div>
      <div class="input" id="rooms">
        <span>Current Room: {this.state.currentRoom}</span>
        <span><RoomChanger changeRoomHandler={this.changeRoomHandler}/></span>
      </div>
      <div class="input" id="searchbar">
        <span><SearchMessages dataSearchHandler={this.dataSearchHandler}/></span>
      </div>
      <div class="input" id="chatbar">
        <span><ChatBar sendMessageHandler={this.sendMessageHandler}/></span>
      </div>
      <span><button onClick={()=>{this.refreshData()}}>Update Messages</button></span>
    </div>
    <div id="chats">
      <MessageList
      currentRoom={this.state.currentRoom}
      messages={this.state.messages}
      />
    </div>
  </div>



  )
  }


};

// <body>
// <div id="main">
//   <h1>chatterbox</h1>
//   <div class="spinner"><img src="client/images/spiffygif_46x46.gif"></div>
//   <div id="rooms">
//     Room:
//     <select name='room' id="roommenu"></select>
//     <button>Add Room</button>
//   </div>
//   <form action="#" id="send" method="post">
//     <input type="text" name="message" id="message"/>
//     <input type="submit" name="submit" class="submit"/>
//   </form>
// </div>
// <button id="update">Update Feed</button>
// <div id="chats"></div>
// </body>
export default App;