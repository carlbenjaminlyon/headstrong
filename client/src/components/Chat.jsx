import React from 'react';



import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";
class Chat extends React.Component {
  constructor(props){
    super(props)

    this.state = {
        channels: null,
        socket: null,
        channel: null
    }

  }



    handleSendMessage(channel_id, text){
        this.socket.emit('send-message', {  text, senderName: this.socket.id, id: Date.now() });
    }

    render() {

        return (
            <div className='chat-app'>
            <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autoComplete="off" /><button>Send</button>
    </form>
            </div>
        );
    }
}
export default Chat