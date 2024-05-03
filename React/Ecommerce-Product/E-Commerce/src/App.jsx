import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./Pages/View";
import AddToCart from "./Pages/AddToCart";
import CheckOut from "./Pages/CheckOut";
import PlaceOrder from "./Pages/PlaceOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

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
