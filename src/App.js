import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Streaming from "./components/streaming";
import Schedule from "./components/schedule";
import About from "./components/about";
import Home from "./components/home";

class App extends Component {
  componentDidMount() {
    document.title = "7th Floor Ping Pong";
  }

  render() {
    return (
      <HashRouter basename="/">
        <div
          style={{
            backgroundColor: "#191919",
          }}
        >
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/not-found" component={NotFound} />
              <Route path="/watch" component={Streaming} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/about" component={About} />
              <Route path="/" exact component={Home} />
              <Redirect from="/home" to="/" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
          <footer style={{ color: "white" }} align="center">
            Created by Ben Weiner 2020
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
