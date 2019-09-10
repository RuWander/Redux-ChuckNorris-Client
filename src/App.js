import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import CategoryContainer from "./components/CategoryContainer";

function App() {
  return (
    <Fragment>
      <div>Navigation Goes here</div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/currentQuote/:category" component={CategoryContainer} />
      </Switch>
    </Fragment>
  );
}

export default App;
