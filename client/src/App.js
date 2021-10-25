import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import CheckingSignedIn from "./pages/CheckingSignedIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Club from "./pages/Profile";
import DataScience from "./pages/DataScience"
import Anime from "./pages/Anime"
//import Private from "./pages/Private";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  // const [isSignedIn, setIsSignedIn] = useState(null);
  // const script = document.createElement("script");
  // script.src = "https://apis.google.com/js/platform.js";
  // script.onload = () => initGoogleSignIn();
  // document.body.appendChild(script);

  // function initGoogleSignIn() {
  //   window.gapi.load("auth2", () => {
  //     window.gapi.auth2
  //       .init({
  //         client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
  //       })
  //       .then(() => {
  //         const authInstance = window.gapi.auth2.getAuthInstance();
  //         const isSignedIn = authInstance.isSignedIn.get();
  //         setIsSignedIn(isSignedIn);

  //         authInstance.isSignedIn.listen((isSignedIn) => {
  //           setIsSignedIn(isSignedIn);
  //         });
  //       });
  //   });
  //   window.gapi.load("signin2", () => {
  //     window.gapi.signin2.render("login-button", {
  //       theme: "dark",
  //     });
  //   });
  // }

  // function PrivateRoute(props) {
  //   const { component, ...rest } = props;
  //   return <Route {...rest} component={isSignedIn ? component : Private} />;
  // }

  
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/club" component={Club} />
          <Route exact path="/club1/datascience" component={DataScience} />
          <Route exact path="/club2/anime" component={Anime} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );



  //return <CheckingSignedIn />;
}

export class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  async componentWillMount() {
    try{
      const response = await fetch("http://localhost:9000/testAPI");
      const json = await response.json();
      this.setState({ data: json });
    }
    catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
            <li>
              {JSON.stringify(this.state.data, null, 2)}
            </li>
        </ul>
      </div>
    );
  }
}

