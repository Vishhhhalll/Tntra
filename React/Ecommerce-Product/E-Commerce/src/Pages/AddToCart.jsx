import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AddToCart.css";
import Navbar from "../components/Navbar";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [
    { firstName, email, address, city, state, zip, cardName, cardNumber, cvv },
    setState,
  ] = useState({
    firstName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    cvv: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []; // get cart data from localstorage
    setCartItems(storedCart);
  }, []);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, // total cost of product
    0
  );

  const removeItem = (id) => {
    const updateCartItems = cartItems.filter((item) => item.id !== id); 
    setCartItems(updateCartItems);
    localStorage.setItem("cart", JSON.stringify(updateCartItems));
  };

  const increaseQuantity = (id) => {
    const updateCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updateCartItems);
    localStorage.setItem("cart", JSON.stringify(updateCartItems));
  };

  const decreaseQuantity = (id) => {
    const updateCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updateCartItems);
    localStorage.setItem("cart", JSON.stringify(updateCartItems));
  };

  return (
    <>
    <Navbar />
    <Link style={{ float:"right" }} className="btn btn-dark" aria-current="page" to={"/"}>
           Back
          </Link>
    <div className="main-container">
      <h2 className="heading">Shopping Cart</h2>
      <hr />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="container1">
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <p>
                    <img
                      style={{
                        height: "60px",
                        width: "50px",
                        marginRight: "6px",
                      }}
                      src={item.image}
                      alt=""
                    />
                    <b style={{ marginRight: "8px" }}>
                      {item.title} - Quantity: {item.quantity}
                    </b>
                    <b>Price: ₹{item.price}</b>
                  </p>

                  <img style={{height:"23px", width:"16px", cursor:'pointer'}} src="src\Images\image.png" onClick={() => removeItem(item.id)}></img>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <hr />
                </div>
              );
            })}
          </div>
          <div>
            <b>
              <h3 style={{ textAlign: "center", fontWeight:"bold", fontFamily:"sans-serif" }} className="totalcost">
                Total Cost: ₹{totalCost.toFixed(2)}
              </h3>
            </b>
            <hr />
            <div className="row">
              <div className="col-75">
                <div className="container">
                  <form>
                    <div className="row">
                      <div style={{ marginRight: "180px" }} className="col-50">
                        <b>
                          <h3 style={{ textAlign: "center", padding: "10px" }}>
                            Billing Address
                          </h3>
                        </b>
                        <hr />
                        <label htmlFor="fname">
                          <i className="fa fa-user" /> Full Name
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="firstname"
                          placeholder="Vishal R. Pandey"
                          value={firstName}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              firstName: e?.target?.value,
                            }))
                          }
                        />
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {firstName.trim() == ""
                            ? "This field is Required"
                            : null}
                        </span>
                        <label htmlFor="email">
                          <i className="fa fa-envelope" /> Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="vishal@gmail.com"
                          value={email}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              email: e?.target?.value,
                            }))
                          }
                        />
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {email.trim() == "" ? "This field is Required" : null}
                        </span>
                        <label htmlFor="adr">
                          <i className="fa fa-address-card-o" /> Address
                        </label>
                        <input
                          type="text"
                          id="adr"
                          name="address"
                          placeholder="111 Vip Vadodara"
                          value={address}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              address: e?.target?.value,
                            }))
                          }
                        />
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {address.trim() == ""
                            ? "This field is Required"
                            : null}
                        </span>
                        <label htmlFor="city">
                          <i className="fa fa-institution" /> City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="Vadodara"
                          value={city}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              city: e?.target?.value,
                            }))
                          }
                        />
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {city.trim() == "" ? "This field is Required" : null}
                        </span>
                        <div className="row">
                          <div className="col-50">
                            <label htmlFor="state">State</label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              placeholder="GUJ"
                              value={state}
                              onChange={(e) =>
                                setState((prevState) => ({
                                  ...prevState,
                                  state: e?.target?.value,
                                }))
                              }
                            />
                            <span style={{ color: "red", fontSize: "20px" }}>
                              {state.trim() == ""
                                ? "This field is Required"
                                : null}
                            </span>
                          </div>
                          <div className="col-50">
                            <label htmlFor="zip">Zip</label>
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              placeholder={390019}
                              value={zip}
                              onChange={(e) =>
                                setState((prevState) => ({
                                  ...prevState,
                                  zip: e?.target?.value,
                                }))
                              }
                            />
                            <span style={{ color: "red", fontSize: "20px" }}>
                              {zip.trim() == ""
                                ? "This field is Required"
                                : null}
                            </span>
                          </div>
                          <hr />
                        </div>
                      </div>
                      <div style={{ marginRight: "180px" }} className="col-50">
                        <b>
                          <h3 style={{ textAlign: "center" }}>Payment</h3>
                        </b>
                        <hr />
                        <label htmlFor="fname">Accepted Cards</label>
                        <div className="icon-container">
                          <i
                            className="fa fa-cc-visa"
                            style={{ color: "navy" }}
                          />
                          <i
                            className="fa fa-cc-amex"
                            style={{ color: "blue", marginLeft: "7px" }}
                          />
                          <i
                            className="fa fa-cc-mastercard"
                            style={{ color: "red", marginLeft: "7px" }}
                          />
                          <i
                            className="fa fa-cc-discover"
                            style={{ color: "orange", marginLeft: "7px" }}
                          />
                        </div>
                        <label htmlFor="cname">Name on Card</label>
                        <input
                          type="text"
                          id="cname"
                          name="cardname"
                          placeholder="Vishal Pandey"
                          value={cardName}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              cardName: e?.target?.value,
                            }))
                          }
                        />
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {cardName.trim() == ""
                            ? "This field is Required"
                            : null}
                        </span>
                        <label htmlFor="ccnum">Credit Card Number</label>
                        <input
                          type="text"
                          id="ccnum"
                          name="cardnumber"
                          placeholder="99999-99999"
                          value={cardNumber}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              cardNumber: e?.target?.value,
                            }))
                          }
                        />
                        <span style={{ color: "red", fontSize: "20px" }}>
                          {cardNumber.trim() == ""
                            ? "This field is Required"
                            : null}
                        </span>
                        <div className="row">
                          <div className="col-50">
                            <label htmlFor="cvv">CVV</label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              placeholder={352}
                              required
                              value={cvv}
                              onChange={(e) =>
                                setState((prevState) => ({
                                  ...prevState,
                                  cvv: e?.target?.value,
                                }))
                              }
                            />
                            <span style={{ color: "red", fontSize: "20px" }}>
                              {cvv.trim() == ""
                                ? "This field is Required"
                                : null}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <label>
                      <input
                        type="checkbox"
                        defaultChecked="checked"
                        name="sameadr"
                      />{" "}
                      Shipping address same as billing
                    </label>
                    <Link to={"/checkout"}>
                      <input
                        type="submit"
                        defaultValue="Continue to checkout"
                        className="btn"
                      />
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default AddToCart;
