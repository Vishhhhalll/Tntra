import { Link } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const click = () => {
    // to clear data from localstorage
    localStorage.clear();
    toast.success("goodbye!");
  };

  let loginUserData = JSON.parse(localStorage.getItem("users")); // get login data
  let isLoggedIn =
    loginUserData?.firstName === "mor_2314" &&
    loginUserData?.password === "83r5^_"; // set user data to isLoggedIn

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li style={{ float: "right" }} className="nav-item">
            <Link to={"/"}>
              <img
                style={{ width: "150px", height: "30px" }}
                src="src\Images\Logo.png"
                alt=""
              />
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <Link>
            <button
              onClick={() => {
                click();
              }}
              className="logoutButton"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="loginButton">Login</button>
          </Link>
        )}
        {isLoggedIn ? (
          <span
            style={{
              fontSize: "18px",
              float: "right",
              marginTop: "12px",
              marginLeft: "10px",
            }}
          >
            <img
              style={{ height: "30px", width: "25px" }}
              src="src\Images\user.png"
            ></img>{" "}
            {loginUserData.firstName}
          </span>
        ) : (
          <img
            style={{
              height: "30px",
              width: "25px",
              float: "right",
              marginLeft: "10px",
            }}
            src="src\Images\user.png"
          ></img>
        )}
      </nav>
    </>
  );
};

export default Navbar;
