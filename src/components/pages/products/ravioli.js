import React from "react";
import "../../../App.css";
import "../../CardProduct.css";
import CardProduct from "../../CardProduct";

export default function ravioli() {
  return (
    <div className="cards">
      <h1> Artisanal Handcrafted Pasta, Culinary Excellence.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardProduct
              key="rav3"
              src="images/ravioli_3.jpg"
              text="Special ravioli stuffed with brie cheese and white sauce."
              title="Brie Ravioli"
              label="Brie Ravioli"
              instructions={[
                "Keep Frozen until cook",
                "Cook it in boiller water about 6 minutes",
              ]}
              ingredients={["Special flour", "eggs", "milk", "Brie Cheese"]}
              suggestions={["Try with our fresh tomato sauce"]}
              package={[
                {
                  price: 15.0,
                  size: "150g",
                  description: "Individual serving size.",
                },
                {
                  price: 30.0,
                  size: "300g",
                  description: "Double serving size.",
                },
                { price: 50.0, size: "500g", description: "Family size." },
              ]}
            />

            <CardProduct
              key="rav2"
              src="images/ravioli_2.jpg"
              text="Special ravioli stuffed with butternut squash."
              title="Butternut Squash Ravioli"
              label="Butternut Squash Ravioli"
              instructions={[
                "Keep Frozen until cook",
                "Cook it in boiller water about 6 minutes",
              ]}
              ingredients={[
                "Special flour",
                "eggs",
                "milk",
                "butternut squash",
                "garlic",
              ]}
              suggestions={["Try with our salvia/butter sauce "]}
              package={[
                {
                  price: 15.0,
                  size: "150g",
                  description: "Individual serving size.",
                },
                {
                  price: 30.0,
                  size: "300g",
                  description: "Double serving size.",
                },
                { price: 50.0, size: "500g", description: "Family size." },
              ]}
            />
            <CardProduct
              key="rav5"
              src="images/ravioli_5.jpg"
              text="Special ravioli stuffed with brazilian sausage and leek."
              title="Sausage Ravioli"
              label="Sausage Ravioli"
              instructions={[
                "Keep Frozen until cook",
                "Cook it in boiller water about 6 minutes",
              ]}
              ingredients={[
                "Special flour",
                "eggs",
                "milk",
                "pork meet",
                "leek",
              ]}
              suggestions={["Try with our fresh tomato sauce"]}
              package={[
                {
                  price: 15.0,
                  size: "150g",
                  description: "Individual serving size.",
                },
                {
                  price: 30.0,
                  size: "300g",
                  description: "Double serving size.",
                },
                { price: 50.0, size: "500g", description: "Family size." },
              ]}
            />
          </ul>
          <ul className="cards__items">
            <CardProduct
              key="rav4"
              src="images/ravioli_4.jpg"
              text="Special ravioli stuffed with brie cheese and white sauce."
              title="Brie Ravioli"
              label="Brie Ravioli"
              instructions={[
                "Keep Frozen until cook",
                "Cook it in boiller water about 6 minutes",
              ]}
              ingredients={["Special flour", "eggs", "milk", "Brie Cheese"]}
              suggestions={["Try with our fresh tomato sauce"]}
              package={[
                {
                  price: 15.0,
                  size: "150g",
                  description: "Individual serving size.",
                },
                {
                  price: 30.0,
                  size: "300g",
                  description: "Double serving size.",
                },
                { price: 50.0, size: "500g", description: "Family size." },
              ]}
            />

            <CardProduct
              key="rav6"
              src="images/ravioli_2.jpg"
              text="Special ravioli stuffed with butternut squash."
              title="Butternut Squash Ravioli"
              label="Butternut Squash Ravioli"
              instructions={[
                "Keep Frozen until cook",
                "Cook it in boiller water about 6 minutes",
              ]}
              ingredients={[
                "Special flour",
                "eggs",
                "milk",
                "butternut squash",
                "garlic",
              ]}
              suggestions={["Try with our salvia/butter sauce "]}
              package={[
                {
                  price: 15.0,
                  size: "150g",
                  description: "Individual serving size.",
                },
                {
                  price: 30.0,
                  size: "300g",
                  description: "Double serving size.",
                },
                { price: 50.0, size: "500g", description: "Family size." },
              ]}
            />
            <CardProduct
              key="rav7"
              src="images/ravioli_5.jpg"
              text="Special ravioli stuffed with brazilian sausage and leek."
              title="Sausage Ravioli"
              label="Sausage Ravioli"
              instructions={[
                "Keep Frozen until cook",
                "Cook it in boiller water about 6 minutes",
              ]}
              ingredients={[
                "Special flour",
                "eggs",
                "milk",
                "pork meet",
                "leek",
              ]}
              suggestions={["Try with our fresh tomato sauce"]}
              package={[
                {
                  price: 15.0,
                  size: "150g",
                  description: "Individual serving size.",
                },
                {
                  price: 30.0,
                  size: "300g",
                  description: "Double serving size.",
                },
                { price: 50.0, size: "500g", description: "Family size." },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
