import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../checkout_product/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import Subtotal from "../subtotal/Subtotal";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/img17/Home/LA/AugCBCCApplnpagechanges/PC/Prime_PC_Header._CB407647902_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h3> Hello, {user? user.email : 'guest you must login'}</h3>
          <h2>Your shopping Basket</h2>

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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
