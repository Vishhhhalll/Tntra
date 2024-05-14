import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Product/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./Pages/View/View";
import AddToCart from "./Pages/Cart/AddToCart";
import CheckOut from "./Pages/Checkout/CheckOut";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/navbar" Component={Navbar} />
          <Route path="/login" Component={Login} />
          <Route exact path="/" Component={ProductList} />
          <Route path="/view/:id" Component={View} />
          <Route path="/cart" Component={AddToCart} />
          <Route path="/checkout" Component={CheckOut} />
          <Route path="/placeorder" Component={PlaceOrder} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
