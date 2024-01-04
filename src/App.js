import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { Analytics } from "@vercel/analytics/react";
import Ravioli from "./components/pages/products/ravioli";
import { ChakraProvider } from "@chakra-ui/react";
import focaccia from "./components/pages/products/focaccia";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/ravioli" component={Ravioli} />
            <Route path="/focaccia" component={focaccia} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Router>
        <Analytics />
      </ChakraProvider>
    </>
  );
}

export default App;
