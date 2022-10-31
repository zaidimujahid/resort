import React from "react";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Rooms" component={Rooms} />
        <Route exact path="/room/:anything" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
