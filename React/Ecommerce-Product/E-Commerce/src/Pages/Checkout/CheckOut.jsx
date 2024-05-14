import { Link } from "react-router-dom";
import useCheckOut from "./useCheckOut";

const CheckOut = () => {
  const [{ cartItems }, { totalCost, click }] = useCheckOut();

  return (
    <div className="main-container">
      <h2 style={{ marginBottom: "10px", color: "navy" }} className="heading">
        Check Out
      </h2>
      <hr />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div style={{ width: "100%" }} className="containercheckout">
            {cartItems.map((item) => {
              return (
                <div key={item.id}>
                  <p>
                    <img
                      style={{
                        height: "50px",
                        width: "45px",
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

                  <hr />
                </div>
              );
            })}
          </div>
          <div>
            <h3 style={{ fontWeight: "bold" }} className="totalcost">
              Total Cost: ₹{totalCost.toFixed(2)}
            </h3>
            <hr />

            <div>
              <Link
                to={"/placeorder"}
                onClick={() => {
                  click();
                }}
                style={{ backgroundColor: "navy" }}
                className="btn btn-success"
              >
                Place Order
              </Link>
              <Link
                to={"/cart"}
                style={{ margin: "10px", backgroundColor: "navy" }}
                className="btn btn-success"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
