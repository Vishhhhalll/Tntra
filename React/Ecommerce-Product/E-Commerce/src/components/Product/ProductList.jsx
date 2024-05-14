/* eslint-disable react/no-unescaped-entities */  
import { Link } from "react-router-dom";
import "./Productlist.css";
import Navbar from "../Navbar/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import useProductList from "./useProductList";

const ProductList = () => {
  const [
    { cartcount, isLoading, searchquery },
    { handleClick, filteredProducts, handleClickSearch },
  ] = useProductList();
  console.log(cartcount);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {isLoading ? <p>Loading...</p> : null}
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
              onChange={(e) => {
                handleClickSearch(e);
              }}
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
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "grey",
                color: "white",
                height: "auto",
                float: "right",
              }}
              id="dropdown-basic"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Men</Dropdown.Item>
              <Dropdown.Item>Women</Dropdown.Item>
              <Dropdown.Item>Price: High-Low</Dropdown.Item>
              <Dropdown.Item>Price: Low-High</Dropdown.Item>
              <Dropdown.Item>Jewellery</Dropdown.Item>
              <Dropdown.Item>Electronic</Dropdown.Item>
              <Dropdown.Item>Customer Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>

        <div className="container" style={{ paddingLeft: "90px" }}>
          {filteredProducts.length == 0 ? (
            <div
              className="datacontainer"
              style={{
                height: "200px",
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
                    <h6>{product.rating.rate}⭐</h6>
                    <h6>
                      <b>{product.category}</b>
                    </h6>
                    <h6 className="card-title">{product.title}</h6>
                    <h6>
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