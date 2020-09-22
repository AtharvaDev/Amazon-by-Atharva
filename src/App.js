import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
// import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payement from "./components/payement/Payement";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";

function App() {
  //this will only run once when the app components loads....
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        // even if the page is refreshed you will be loged in again
        // user is logedin or has loged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payement />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <div className="foot">
            <Footer />
            </div>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
