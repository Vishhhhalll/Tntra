import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogin = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const userData = async () => {
    let userId = await fetch("https://fakestoreapi.com/auth/login", {
      // fetch login data
      method: "POST",
      body: JSON.stringify({
        username: firstName,
        password: password,
      }),
      headers: { "content-type": "application/json" },
    });

    let data = await userId.json();

    if (data) {
      loginData();
      navigate("/");
    } else {
      alert("Password is invalid");
    }
  };
  const navigate = useNavigate(); // using "useNavigatec" to navigate to home page after success login

  const loginData = () => {
    const loginDetails = JSON.parse(localStorage.getItem("users")); // store login data in localstorage

    const updateLoginDetail = { ...loginDetails, firstName, password };

    localStorage.setItem("users", JSON.stringify(updateLoginDetail));
    toast.success("Welcome You're login now!");
    if (!loginData) {
      toast.error("Invalid Username or Password");
    }
  };

  const validateForm = () => {
    if (firstName.trim() == "") {
      toast.warning("Please enter name First");
      return true;
    }
    if (password.trim() == "") {
      toast.warning("Please enter password");
      return true;
    }

    if (firstName.trim() && password.trim()) {
      userData();
    }
  };

  const handleCLickFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handlClickPassword = (e) => {
    setPassword(e.target.value);
  };
  return [
    { firstName, password },
    { validateForm, handlClickPassword, handleCLickFirstname },
  ];
};

export default useLogin;
