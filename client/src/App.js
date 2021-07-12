import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// import the primary container components
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Interests from "./components/Interests/Interests";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/interests" component={Interests} />
          <Route path="/contact" component={Contact} />
          <Route
            path="*"
            render={({ match }) => <p>Oops! There's nothing at {match.url}.</p>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
