import { Link } from "react-router-dom";
import "./View.css";
import useViewProduct from "./useViewProduct";

const View = () => {
  const [{ product, isLoading }, { handleClick }] = useViewProduct();

  return (
    <>
      <ul className="nav">
        <li style={{ padding: "5px" }} className="nav-item">
          <Link className="btn btn-dark" aria-current="page" to={"/"}>
            Back
          </Link>
        </li>
      </ul>
      <div>{isLoading ? <p>Loading...</p> : null}</div>

      <div className="wrapper" style={{ height: "66vh" }}>
        <div className="product-img">
          <img src={product.image} width={"200px"} />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{product.category}</h1>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-price-btn">
            <p>
              <span>₹{product.price}</span>
            </p>
            <Link
              onClick={() => {
                handleClick(product);
              }}
              className="btn btn-dark"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
