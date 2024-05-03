import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const userData = async () => {
    let userId = await fetch("https://fakestoreapi.com/auth/login", {   // fetch login data
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
    const loginDetails = JSON.parse(localStorage.getItem("users"));  // store login data in localstorage

    const updateLoginDetail = {...loginDetails,  firstName, password };

    localStorage.setItem("users", JSON.stringify(updateLoginDetail));
    toast.success("Welcome You're login now!")
    if(!loginData){
      toast.error("Invalid Username or Password")
    }
  };

  function validateForm() {
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
  }

  return (
    <>
      <div className="wrapper signIn">
        <div className="illustration">
          <img src="https://source.unsplash.com/random" alt="illustration" />
        </div>
        <div className="form">
          <div className="heading">LOGIN</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="e-mail"
                placeholder="Enter you Password"
              />
            </div>
            <button
              onClick={() => {
                validateForm();
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
