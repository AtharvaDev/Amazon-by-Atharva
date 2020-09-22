import React, { useEffect, useState } from "react";
import "./Home.css";
// import Product from "./Product";
import axios from "axios";
import data from "../../data";
import Product from "../product/Product";

function Home(props) {
  const [products, setProduct] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProduct(data);
  //   };
  //   fetchData();
  //   return () => {
  //     //
  //   };
  // }, []);

  useEffect(() => slider(0), []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__slider-container">
          <div className="home__slide">
            <img
              className="home__image "
              src="https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg"
              alt="image0"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image "
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg"
              alt="image1"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
              alt="image2"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
              alt="image3"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
              alt="image4"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
              alt="image5"
            />
          </div>
          <div className="home__slide">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
              alt="image6"
            />
          </div>
        </div>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/2x_Echo_Dot._CB428276186_.jpg"
          alt=""
        /> */}
        <div className="home__row">
          {data.products.map((product) => {
            console.log("ok");
            return (
              <Product
                key={product._id}
                title={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
    </div>

    // <div className="home">
    //   <div className="home__container">
    //     <img
    //       className="home__image"
    //       src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-JULY/2x_Echo_Dot._CB428276186_.jpg"
    //       alt=""
    //     />

    //     <div className="home__row">
    //       <Product
    //         id="2324343"
    //         title="The lean startup"
    //         price={2000.0}
    //         image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
    //         rating={4}
    //       />
    //       <Product
    //         id="3567577"
    //         title="Wacom One Digital Drawing Tablet"
    //         price={34999.0}
    //         image="https://images-na.ssl-images-amazon.com/images/I/71TwrRTpFNL._SL1500_.jpg"
    //         rating={5}
    //       />
    //     </div>

    //     <div className="home__row">
    //       <Product
    //         id="34545688"
    //         title="Hershey Spreads, Cocoa, 350g"
    //         price={250.0}
    //         image="https://images-na.ssl-images-amazon.com/images/I/81YUl-0BGWL._SL1500_.jpg"
    //         rating={5}
    //       />
    //       <Product
    //         id="89879576"
    //         title="MAGGI NUTRI-LICIOUS Masala Veg Atta Noodles "
    //         price={75.0}
    //         image="https://images-na.ssl-images-amazon.com/images/I/81zu71BqgLL._SL1500_.jpg"
    //         rating={4}
    //       />
    //       <Product
    //         id="65767765"
    //         title="Saffola Active Pro, Jar, 5 L"
    //         price={625.0}
    //         image="https://images-na.ssl-images-amazon.com/images/I/615itlClo5L._SL1500_.jpg"
    //         rating={3}
    //       />
    //     </div>

    //     <div className="home__row">
    //       <Product
    //         id="65767765"
    //         title="DELL Inspiron 5593 15.6-inch Laptop (10th Gen Core i5-1035G1/8GB/1TB HDD), Silver"
    //         price={75000.0}
    //         image="https://images-na.ssl-images-amazon.com/images/I/51LpnRzTaVL._SL1000_.jpg"
    //         rating={3}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

function slider(counter) {
  const slides = document.querySelectorAll(".home__image");

  slides.forEach((slide, index) => {
    if (index !== counter) {
      slide.style.visibility = `hidden`;
      slide.classList.add(`image-${index}`);
    }
  });
  moveCorousal(counter, slides, slides.length);
}

function moveCorousal(counter, slides, len) {
  if (slides) {
    if (counter >= len - 1) counter = 0;
    else counter += 1;

    slides.forEach((slide, index) => {
      if (index === counter) {
        slide.style.visibility = `visible`;
      } else {
        slide.style.visibility = `hidden`;
      }
    });
  }
  setTimeout(() => {
    moveCorousal(counter, slides, len);
  }, 5000);
}

export default Home;
