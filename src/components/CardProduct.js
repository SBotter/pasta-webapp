import NavigationTab from "./NaviagationTab";
import { Box } from "@chakra-ui/react";
import PriceDisplay from "./PriceDisplay";

function CardProduct(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Travel" src={props.src} />
          </figure>
          <div className="cards__item__title">
            <h1 className="cards__item__text_title">{props.title}</h1>
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
          <div className="cards__item__container_details">
            <Box p={4} borderRadius={20} style={{ maxWidth: "100%" }}>
              <NavigationTab
                ingredients={props.ingredients}
                instructions={props.instructions}
                suggestions={props.suggestions}
              />
            </Box>
          </div>

          <div className="cards__item__container_details">
            <Box p={4} borderRadius={20} width="100%">
              <PriceDisplay package={props.package} />
            </Box>
          </div>
        </div>
      </li>
    </>
  );
}
export default CardProduct;
