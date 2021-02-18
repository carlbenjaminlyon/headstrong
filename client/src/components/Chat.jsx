import React, { Component } from 'react';
function Chat () {
  return (
    <div class="join-container">
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" /><button>Send</button>
      </form>
    </div>
  );
}



export default Chat
;
