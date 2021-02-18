import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import ChatRoom from "./ChatRoom.jsx";
const App = () => {

return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:roomId" component={ChatRoom} />
    </Switch>
  </Router>
);
}
export default App