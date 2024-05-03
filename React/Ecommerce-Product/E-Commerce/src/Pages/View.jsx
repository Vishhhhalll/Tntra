import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./View.css";
import { toast } from "react-toastify";

const View = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkuser, setCheckUser] = useState([]);

  
  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true);
      let ProductData = await fetch(`https://fakestoreapi.com/products/${id}`); // fetch data of "id" using useParams

      let Data = await ProductData.json();
      setProduct(Data);
      setIsLoading(false);
    };
    fetchProductData();
  }, [id]);

  let addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const checkProductIndex = cartItems.findIndex(
      (productItem) => productItem.id === product.id
    );

    if (checkProductIndex !== -1) {
      const updateCartItems = [...cartItems];
      updateCartItems[checkProductIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(updateCartItems));
    } else {
      const updateCartItems = [...cartItems, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updateCartItems));
    }
    toast.success("Product is added to the cart");
  };
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users")); // get user data form localstorage
    console.log(users);
    let isLoggedIn =
      users?.firstName === "mor_2314" && users?.password === "83r5^_";
    setCheckUser(isLoggedIn);
  }, [checkuser]);
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

      <div className="wrapper">
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
            {checkuser ? (
              <Link
                style={{ backgroundColor: "navy" }}
                onClick={() =>
                  addToCart({
                    id: product.id,
                    image: product.image,
                    category: product.category,
                    title: product.title,
                    desc: product.description,
                    price: product.price,
                  })
                }
                className="btn btn-success"
              >
                {" "}
                Add to cart{" "}
              </Link>
            ) : (
              <button disabled className="AddProductButton">
                Login First
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
