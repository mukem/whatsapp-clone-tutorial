import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user },dispatch] = useStateValue();


  return (
    //BEM naming convertion
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          
        <div className="app_body">
        <Router>
          <Switch>
          <Sidebar />
            <Route path="/rooms/:roomId">
              
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
          </Router>
      </div>
  )}
     
    </div>
  );
}
   
export default App;
