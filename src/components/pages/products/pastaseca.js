import React from "react";
import "../../../App.css";
import "../../CardProduct.css";
import CardProduct from "../../CardProduct";

export default function pastaseca() {
  return (
    <div className="cards">
      <h1> Artisanal Handcrafted Pasta, Culinary Excellence.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardProduct
              key="pasta1"
              src="images/pastaseca_1.jpg"
              text="Embark on a culinary adventure with our handcrafted spaghetti, where a meticulous blend of special flours and the richness of free-range eggs converge. Each strand is a testament to artisanal mastery, offering a delightful harmony of textures and flavors that transcend the ordinary, ensuring a truly elevated dining experience."
              title="Spaghetti"
              label="Spaghetti"
              instructions={[
                "Keep it on dry condition",
                "Cook it in boiller water between 2-3 minutes",
              ]}
              ingredients={["Special flour", "free range eggs"]}
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
              key="pasta2"
              src="images/pastaseca_2.jpg"
              text="Linguini beets"
              title="Linguini beets"
              label="Linguini beets"
              instructions={[
                "Keep it on dry condition",
                "Cook it in boiller water between 2-3 minutes",
              ]}
              ingredients={["Special flour", "free range eggs", "beets"]}
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
              key="pasta4"
              src="images/pastaseca_4.jpg"
              text="Fettuccini Spinach."
              title="Fettuccini Spinach"
              label="Fettuccini Spinach"
              instructions={[
                "Keep it on dry condition",
                "Cook it in boiller water between 2-3 minutes",
              ]}
              ingredients={["Special flour", "free range eggs", "spinach"]}
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
