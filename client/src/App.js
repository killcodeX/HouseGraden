  
import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./App.css";
import useWindowSize from "./helpers/windowSize";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";
import SingleProduct from "./container/SingleProduct";

function App() {
  const { width } = useWindowSize();
  return (
    <main className='position-relative'>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={SingleProduct} />
      </Switch>
      <Footer/>
    </main>
  );
}

export default App;
