import React from 'react';



import socketClient from "socket.io-client";
class Chat extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            channels: null,
            socket: null,
            channel: null
        }

    }



    handleSendMessage(text){
        this.socket.emit('send-message', {  text, senderName: this.socket.id, id: Date.now() });
    }

    render() {


        return (
            <div className='chat-app'>
            <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autoComplete="off" /><button onClick={this.handleSendMessage}>Send</button>
    </form>
            </div>
        );
    }
}
export default Chat