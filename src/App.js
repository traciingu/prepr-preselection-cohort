import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/prepr-preselection-tracy"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
