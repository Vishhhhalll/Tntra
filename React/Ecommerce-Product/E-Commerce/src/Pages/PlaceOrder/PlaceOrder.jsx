import Navbar from "../../components/Navbar/Navbar";
import "./Placeorder.css";
import { Link } from "react-router-dom";

// placeorder page
const PlaceOrder = () => {
  return (
    <>
      <Navbar />
      <div>
        <Link to={"/"}>
          <button className="Back">Back</button>
        </Link>
      </div>

      <div>
        <img
          style={{ height: "300px", width: "470px", marginTop: "100px" }}
          src="\src\Images\Order_Confirm.png"
          alt=""
        />
        <h2 style={{ fontWeight: "bold" }}>Your order has bin placed!</h2>
        <h3>Thank you for shopping.</h3>
      </div>
    </>
  );
};

export default PlaceOrder;
