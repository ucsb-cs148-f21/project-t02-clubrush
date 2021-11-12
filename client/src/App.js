import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import CheckingSignedIn from "./pages/CheckingSignedIn";
import Home from "./pages/Home";
//import Profile from "./pages/Profile";
import Club from "./pages/Club"
import DataScience from "./pages/DataScience"
import Anime from "./pages/Anime"
import Fraternity from "./pages/Fraternity"
import Department from "./pages/Department"
import Sports from "./pages/Sport"

//import Private from "./pages/Private";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup"
import Login from "./pages/Login"

export default function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/club/:id" component={Club}/>
          <Route exact path="/club1/datascience" component={DataScience} />
          <Route exact path="/club2/anime" component={Anime} />
          <Route exact path="/club3/fraternity" component={Fraternity} />
          <Route exact path="/club3/Department" component={Department} />
          <Route exact path="/club3/Sports" component={Sports} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
}




