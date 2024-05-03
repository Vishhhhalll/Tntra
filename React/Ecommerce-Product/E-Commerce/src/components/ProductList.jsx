/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Productlist.css";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduts] = useState([]);
  const [error, setError] = useState(null);
  const [cartcount, setCartCount] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // fetch data from API.
    const fetchProductData = async () => {
      try {
        setIsLoading(true);
        let ProductData = await fetch("https://fakestoreapi.com/products");

        if (!ProductData.ok) {
          throw new error("Network response was not ok!");
        }
        let Data = await ProductData.json();
        setProduts(Data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchProductData();
    const cartItems = JSON.parse(localStorage.getItem("cart")) || []; // to update cartIcon
    if (cartItems.length == 0) {
      setCartCount((cartItems.length = "")); // validation for cart length if 0 then empty.
    } else {
      setCartCount(cartItems.length);
    }
  }, []);

  let addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const checkProductIndex = cartItems.findIndex(
      // find product index
      (productItem) => productItem.id === product.id
    );

    if (checkProductIndex !== -1) {
      const updateCartItems = [...cartItems];
      updateCartItems[checkProductIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(updateCartItems)); // validation for not storing duplicate values.
    } else {
      const updateCartItems = [...cartItems, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updateCartItems)); //  store data in localstorage
    }
    setCartCount(cartItems.length + 1);
    toast.success("Product is added to the cart");
  };
  let loginUser = JSON.parse(localStorage.getItem("users")); // get login info from localstorage
  let isLoggedIn =
    loginUser?.firstName === "mor_2314" && loginUser?.password === "83r5^_"; // set login info to isLoggedIn

  let filteredProducts = products.filter((cartproduct) =>
    cartproduct.title.toLowerCase().includes(searchquery.toLowerCase())
  ); // filter product nd use includes to check if array contains a specified value


  // const click = () => {
  // }
  
  const handleClick = (product) => {

    if (!isLoggedIn) {
      navigate('/login');
    } else {
      addToCart(product);
      console.log(product);
    }
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}> 
        {isLoading ? <p>Loading</p> : null}
      </div>
      <>
        <Navbar />
        {/* <Spinner animation="border" role="status">
      {isLoading ? <span className="visually-hidden">Loading...</span> : null}
    </Spinner> */}

        <nav className="form-group">
          <div
            style={{ float: "left", marginBottom: "5px" }}
            className="col-md-3 border border-secondary rounded"
          >
            <input
              style={{ color: "black" }}
              placeholder="Search"
              className="form-control py-2"
              value={searchquery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="search"
              id="example-search-input"
            />
          </div>
          <div style={{ borderRadius: "5px" }}>
            <Link to={"/cart"}>
              <span
                className="cartNum"
                style={{
                  color: "black",
                  fontSize: "23px",
                  fontWeight: "bold",
                  float: "right",
                  zIndex: "inherit",
                }}
              >
                {cartcount}
              </span>
              <img
                className="cartImage"
                style={{ height: "47px", width: "47px", float: "right" }}
                src="src\Images\grocery-store.png"
                alt=""
              />
            </Link>
          </div>
        </nav>

        <div className="container" style={{ paddingLeft: "90px" }}>
          {filteredProducts.length == 0 ? (
            <div
              className="datacontainer"
              style={{
                height: "100px",
                width: "1600px",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <p>
                You search for <p style={{ color: "red" }}>"{searchquery}"</p>
              </p>
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                We couldn't find any matches!
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="card"
                  style={{ width: "22%", padding: "5px 13px" }}
                >
                  <div className="card-body" style={{ width: "90%" }}>
                    <Link to={`/view/${product.id}`}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                      ></img>
                    </Link>
                  </div>
                  <div style={{ padding: "2px 13px" }}>
                    <h6 style={{ color: "black" }}>
                      <b>{product.category}</b>
                    </h6>
                    <h6 style={{ color: "black" }} className="card-title">
                      {product.title}
                    </h6>
                    <h6 style={{ color: "black" }}>
                      <b>₹{product.price}</b>
                    </h6>
                  </div>

                  <Link
                    onClick={() => {
                      handleClick(product);
                    }}
                    className="btn btn-dark"
                  >
                    Add to cart
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </>
    </div>
  );
};

export default ProductList;
