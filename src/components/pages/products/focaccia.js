import React from "react";
import "../../../App.css";
import "../../CardProduct.css";
import CardProduct from "../../CardProduct";

export default function focaccia() {
  return (
    <div className="cards">
      <h1> Artisanal Handcrafted Pasta, Culinary Excellence.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardProduct
              key="foca1"
              src="images/focaccia_1.jpg"
              text="Special ravioli stuffed with brie cheese and white sauce."
              title="Rosemery Focaccia"
              label="Rosemery Focaccia"
              instructions={["Keep Fridge up to 6 days"]}
              ingredients={[
                "Special flour",
                "water",
                "yeast",
                "salt",
                "olive oil",
                "fresh rosemery",
                "fleur de sel",
              ]}
              suggestions={[
                "Infuse it with olive oil and balsamic for an enhanced culinary experience!",
              ]}
              package={[
                {
                  price: 8.0,
                  size: "small",
                  description: "About 250g",
                },
                {
                  price: 15.0,
                  size: "large",
                  description: "About 450g",
                },
              ]}
            />

            <CardProduct
              key="foca3"
              src="images/focaccia_3.jpg"
              text="Special ravioli stuffed with butternut squash."
              title="Confit Tomato Foccacia"
              label="Confit Tomato Foccacia"
              instructions={["Keep Fridge up to 6 days"]}
              ingredients={[
                "Special flour",
                "water",
                "yeast",
                "salt",
                "olive oil",
                "fresh oregano",
                "confit tomato",
                "garlic",
                "rosemery",
                "fleur de sel",
              ]}
              suggestions={[
                "Infuse it with olive oil and balsamic for an enhanced culinary experience!",
              ]}
              package={[
                {
                  price: 8.0,
                  size: "small",
                  description: "About 250g",
                },
                {
                  price: 15.0,
                  size: "large",
                  description: "About 450g",
                },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
