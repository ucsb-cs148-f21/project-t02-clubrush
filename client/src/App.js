import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import CheckingSignedIn from "./pages/CheckingSignedIn";
import Home from "./pages/Home";
import Club from "./pages/Club"
import DataScience from "./pages/DataScience"
import Anime from "./pages/Anime"
//import Private from "./pages/Private";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const test = "hi";
  

  if(!isSignedIn) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/club/:id" component={Club}/>
          <Route exact path="/club1/datascience" component={DataScience} />
          <Route exact path="/club2/anime" component={Anime} />
          <Route exact path="/login" isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} test={test} component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
  else {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/club/:id" component={Club}/>
          <Route exact path="/club1/datascience" component={DataScience} />
          <Route exact path="/club2/anime" component={Anime} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}




