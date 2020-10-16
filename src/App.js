import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Streaming from "./components/streaming";
import Schedule from "./components/schedule";
import About from "./components/about";
import Home from "./components/home";

class App extends Component {
  componentDidMount() {
    document.title="7th Floor Ping Pong";
  }

  render() {
  return (
      <div
        style={{
        backgroundColor: '#191919'}}>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/pingpong/not-found" component={NotFound} />
            <Route path="/pingpong/watch" component={Streaming} />
            <Route path="/pingpong/schedule" component={Schedule} />
            <Route path="/pingpong/about" component={About} />
            <Route path="/pingpong" exact component={Home} />
            <Redirect from="/pingpong/home" to="/pingpong" />
            <Redirect to="/pingpong/not-found" />
          </Switch>
        </main>
        <footer style={{color: "white"}} align="center">
          Created by Ben Weiner 2020
        </footer>
      </div>
    );
  }
}

export default App;
