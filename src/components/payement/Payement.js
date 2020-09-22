import React from "react";
// import CheckoutProduct from "./CheckoutProduct";
import "./Payement.css";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import PaymentForm from "../payement_form/PaymentForm";
import { Button } from "@material-ui/core";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../reducer";
import CheckoutProduct from "../checkout_product/CheckoutProduct";

function Payement() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payement">
      <div className="payement__container">
        <h1>
          Checkout ({<Link to="/checkout">{basket?.length} items</Link>}){" "}
        </h1>
        {/* delivery address  */}
        <div className="payement__section">
          <div className="payement__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payement__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Mumbai, IN</p>
          </div>
        </div>
        <div className="payement__section">
          <div className="payement__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payement__section">
          <div className="payement__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <PaymentForm />
            <div className="payment_button">
              <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
              >
                <CurrencyFormat
                  renderText={(value) => <>proceed to pay {value}</>}
                  decimalScale={2}
                  value={getCartTotal(basket)}
                  // value={0}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" ₹. "}
                />
              </Button>
            </div>
            {/* stripe magic goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payement;
