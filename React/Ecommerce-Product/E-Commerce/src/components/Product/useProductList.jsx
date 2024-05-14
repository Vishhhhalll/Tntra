import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useProductList = () => {
  const [cartCount, setCartCount] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduts] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // fetch data from API.
    const fetchProductData = async () => {
      try {
        setIsLoading(true);
        let ProductData = await fetch("https://fakestoreapi.com/products", {});

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
    
    if (cartItems.length == 0) {
      setCartCount((cartItems.length = "")); // validation for cart length if 0 then empty.
    } else {
      setCartCount(cartItems.length);
    }
  };

  let filteredProducts = products.filter((cartproduct) =>
    cartproduct.title.toLowerCase().includes(searchquery.toLowerCase())
  ); // filter product nd use includes to check if array contains a specified value

  const handleClickSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  let loginUser = JSON.parse(localStorage.getItem("users")); // get login info from localstorage
  let isLoggedIn =
    loginUser?.firstName === "mor_2314" && loginUser?.password === "83r5^_"; // set login info to isLoggedIn

  const handleClick = (product) => {
    if (!isLoggedIn) {
      navigate("/login");
      toast.info("Please login first");
    } else {
      addToCart(product);
    }
  };
  return [
    { cartCount, isLoading, searchquery },
    { handleClick, filteredProducts, handleClickSearch },
  ];
};

export default useProductList;
