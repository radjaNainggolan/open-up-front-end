import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "app/components/AddProducts";
import EditProduct from "app/components//EditProduct";
import LogIn from "app/pages/LogIn";
import NavBar from "app/components/NavBar";
import ProductDetails from "app/components/ProductDetails";
import Search from "app/components/Search";
import SignUp from "app/pages/SignUp";
import Contacts from "app/components/Contacts";
import ProductPage from "app/components/ProductPage";
import Home from "app/pages/Home";

/* TODO: 
         - Instead of passing authentication state to all components as a prop
          try integrating React ContextAPI.
          
          - Handle non existing routes. That is done by adding epmty Route path at the end, where
          the apropriate NotFound components is rendered. However, since Home url / is not mathced, it
          would appear as if Home URL is non existent. Design Home component so something can be rendered
          when matching route /.   
*/

function App() {
  // Authentication status state
  const [isAuthenticated, setAuthenticationStatus] = useState(false);
  // isAuthenticating states is used to make authentication data throughout the session.
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      setAuthenticationStatus(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }
  return (
    !isAuthenticating && (
      <Router>
        <ProductPage />

        {/* <div style={{ background: "#6F5D83" }} className="App">
          <NavBar
            isAuthenticated={isAuthenticated}
            setAuthenticationStatus={setAuthenticationStatus}
            setIsAuthenticating={setIsAuthenticating}
          ></NavBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search
                isAuthenticated={isAuthenticated}
                setAuthenticationStatus={setAuthenticationStatus}
              ></Search>
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails
                isAuthenticated={isAuthenticated}
                setAuthenticationStatus={setAuthenticationStatus}
              ></ProductDetails>
            </Route>
            <Route exact path="/new-product-form">
              <AddProduct
                isAuthenticated={isAuthenticated}
                setAuthenticationStatus={setAuthenticationStatus}
              ></AddProduct>
            </Route>
            <Route exact path="/edit/:id">
              <EditProduct
                isAuthenticated={isAuthenticated}
                setAuthenticationStatus={setAuthenticationStatus}
              ></EditProduct>
            </Route>
            <Route exact path="/sign-up">
              <SignUp
                setAuthenticationStatus={setAuthenticationStatus}
              ></SignUp>
            </Route>
            <Route exact path="/log-in">
              <LogIn
                isAuthenticated={isAuthenticated}
                setAuthenticationStatus={setAuthenticationStatus}
              ></LogIn>
            </Route>
          </Switch>
          <Contacts />
        </div> */}
      </Router>
    )
  );
}

export default App;
