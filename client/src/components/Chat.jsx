import React, { Component } from 'react'
class Chat extends Component{
constructor(props){
    super(props)
    this.state = {
        message: ''
    }
    this.handleMessage = this.handleMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
}
handleMessage(e){


    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
    this.setState({
        message: ''
    })
}
handleChange(e){
 this.setState({
     message: e.target.value
 })
}
render(){
    return (
        <div className="join-container">
            <script src="/socket.io/socket.io.js"></script>
            <script>

</script>
            <ul id="messages"><li>
                test </li></ul>

            <form id="form" action="">
                <input onChange={this.handleChange} id="input" autoComplete="off" /><button>Send</button>
            </form>
        </div>
    )

}
}

export default Chat