  
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
import Cart from "./container/Cart";
import Orders from "./container/Orders";
import WishList from "./container/WishList";
import Login from "./container/Auth/login";
import Register from "./container/Auth/register";

function App() {
  const { width } = useWindowSize();
  return (
    <main className='position-relative'>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/my-cart" component={Cart} />
        <Route exact path="/my-orders" component={Orders} />
        <Route exact path="/my-wishlist" component={WishList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer/>
    </main>
  );
}

export default App;
