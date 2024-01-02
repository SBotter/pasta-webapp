import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Artisanal Handcrafted Pasta, Culinary Excellence.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ravioli_3.jpg"
              text="Savor the exquisite joy of stuffed ravioli. Handcrafted perfection, bursting with flavor. Elevate your dining experience with every bite."
              label="Ravioli"
              path="/products/ravioli"
            />
            <CardItem
              src="images/PastaSeca_3.jpg"
              text="Discover the rustic allure of pasta seca. Air-dried to perfection, a time-honored tradition that captures the essence of authentic Italian cuisine."
              label="Pasta Seca"
              path="/products/pastaseca"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Focaccia_2.jpg"
              text="Indulge in the aromatic delight of rosemary focaccia. Artisanal and oven-baked, each bite is a fragrant journey of satisfaction and taste."
              label="Focaccia"
              path="/products/focaccia"
            />
            <CardItem
              src="images/tomatoConfit_1.jpg"
              text="Savor the richness of our meticulously crafted tomato sauce. Slow-simmered to perfection, it embodies homemade authenticity, enhancing every dish with exceptional flavor."
              label="Tomato Sauce"
              path="/products/sauce"
            />
            <CardItem
              src="images/lasagna_1.jpg"
              text="Embrace layers of culinary perfection with our lasagna. Meticulously crafted, it's a symphony of flavors creating an unforgettable dining experience."
              label="Lasagna"
              path="/products/lasagna"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
