import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import CheckingSignedIn from "./pages/CheckingSignedIn";
import Home from "./pages/Home";
import Club from "./pages/Club"
import DataScience from "./pages/DataScience"
import Anime from "./pages/Anime"
import Fraternity from "./pages/Fraternity"
import Department from "./pages/Department"
import Sports from "./pages/Sport"
import Edit from "./pages/Edit"


//import Private from "./pages/Private";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import { useLocalStorage, getStorageValue } from "./components/useLocalStorage"

export default function App() {
  // const [isSignedIn, setIsSignedIn] = useState(null);
  const [isSignedIn, setIsSignedIn] = useLocalStorage("isSignedIn", null);

  const [cart, setCart] = useLocalStorage("cart", []);

  const addToBookmark = (club) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => club.name === item.name
    );
    if(itemInCart){
    }
    else{
      itemInCart= {
        ...club,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    console.log("work")
    console.log(cart)
};

  if(!isSignedIn) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/club/:id" render={() => <Club cart={cart} setCart={setCart} addToBookmark={addToBookmark}/>}/>
          <Route exact path="/club1/datascience" component={DataScience} />
          <Route exact path="/club2/anime" component={Anime} />
          <Route exact path="/club3/fraternity" component={Fraternity} />
          <Route exact path="/club3/Department" component={Department} />
          <Route exact path="/club3/Sports" component={Sports} />
          <Route exact path="/login" render={() => <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>} />
          <Route exact path="/bookmark" render={() => <Bookmark cart={cart} setCart={setCart}/>}/> 
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/edit" component={Edit} />
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
          <Route exact path="/club3/fraternity" component={Fraternity} />
          <Route exact path="/club3/Department" component={Department} />
          <Route exact path="/club3/Sports" component={Sports} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/bookmark" render={() => <Bookmark cart={cart} setCart={setCart}/>}/> 
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
    // return (
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/club/:id" component={Club}/>
    //       <Route exact path="/club1/datascience" component={DataScience} />
    //       <Route exact path="/club2/anime" component={Anime} />
    //       <Route exact path="/login" render={() => <Login isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>} />
    //       <Route exact path="/signup" component={Signup} />
    //       <Route path="/" component={PageNotFound} />
    //     </Switch>
    //   </BrowserRouter>
    // );
  }
}




