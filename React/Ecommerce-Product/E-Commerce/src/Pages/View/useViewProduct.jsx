import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const useViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  let users = JSON.parse(localStorage.getItem("users")); // get user data form localstorage
  let isLoggedIn =
    users?.firstName === "mor_2314" && users?.password === "83r5^_";

  const handleClick = (product) => {
    if (!isLoggedIn) {
      toast("Login first!");
    } else {
      addToCart(product);
    }
  };
  return [
    { product, isLoading },
    { addToCart, handleClick },
  ];
};

export default useViewProduct;
