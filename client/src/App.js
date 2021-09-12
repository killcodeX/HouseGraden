  
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
import { useDispatch, useSelector } from "react-redux";
import { verifyStorage } from "./redux/actions/authactions";

function App() {
  const { width } = useWindowSize();
  const location = useLocation();
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(verifyStorage());
  }, [auth]);


  return (
    <main className='position-relative'>
      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <Header />
      ) : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={SingleProduct} />
        <Route exact path="/my-cart" component={Cart} />
        <Route exact path="/my-orders" component={Orders} />
        <Route exact path="/my-wishlist" component={WishList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <Footer />
      ) : null}

    </main>
  );
}

export default App;
