import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/2x_Echo_Dot._CB428276186_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="2324343"
            title="The lean startup"
            price={2000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="3567577"
            title="Wacom One Digital Drawing Tablet"
            price={34999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71TwrRTpFNL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="34545688"
            title="Hershey Spreads, Cocoa, 350g"
            price={250.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81YUl-0BGWL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="89879576"
            title="MAGGI NUTRI-LICIOUS Masala Veg Atta Noodles "
            price={75.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81zu71BqgLL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="65767765"
            title="Saffola Active Pro, Jar, 5 L"
            price={625.0}
            image="https://images-na.ssl-images-amazon.com/images/I/615itlClo5L._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="65767765"
            title="DELL Inspiron 5593 15.6-inch Laptop (10th Gen Core i5-1035G1/8GB/1TB HDD), Silver"
            price={75000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51LpnRzTaVL._SL1000_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
