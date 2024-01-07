import React from "react";
import { Text, HStack, Box } from "@chakra-ui/react";
import "./Cards.css";

function DeliveryCalculator(distance, isWrapEnabled) {
  const gasPrice = process.env.REACT_APP_DELIVERY_GAS_PRICE;
  const deliveryRadious = process.env.REACT_APP_DELIVERY_RADIOUS;
  const quilometerPerMeter = 8;
  const costPerMeter = gasPrice / quilometerPerMeter / 1000;
  const distanceFree = process.env.REACT_APP_DELIVERY_DISTANCE_FREE;
  let orderDeliveryFree = "";

  let deliveryPrice = Math.round(distance.distance * costPerMeter * 5);

  if (distance && distance.distance <= distanceFree) {
    deliveryPrice = "Free";
  } else if (
    distance &&
    distance.distance > distanceFree &&
    distance.distance < 10000
  ) {
    orderDeliveryFree = "70";
  } else if (
    distance &&
    distance.distance > 10000 &&
    distance.distance < 15000
  ) {
    orderDeliveryFree = "100";
  } else if (
    distance &&
    distance.distance > 15000 &&
    distance.distance < process.env.REACT_APP_DELIVERY_RADIOUS
  ) {
    orderDeliveryFree = "140";
  }

  if (distance && distance.distance > deliveryRadious)
    return (
      <div>
        <p>
          Sorry! We do not offer delivery services for locations that are too
          distant from our current operational range, but we are open to making
          special arrangements; please feel free to contact us for further
          assistance.
        </p>
      </div>
    );

  if (distance && distance.distance === "") return null;

  return (
    <>
      <Box width={"100%"}>
        <HStack
          spacing={4}
          align="center"
          maxW="md" // Adjust the maximum width based on your layout
        >
          <Box width="100%">
            <Text fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
              Delivery Costs
            </Text>
          </Box>
          <Box width="100%">
            <Text fontSize={{ base: "14px", md: "18px", lg: "20px" }}>
              {deliveryPrice !== "Free" && "$"} {deliveryPrice}
            </Text>
          </Box>
        </HStack>
        <Text fontSize={{ base: "14px", md: "20px", lg: "22px" }}>
          {deliveryPrice !== "Free" && "Enjoy Free Delivery on Orders Over $"}
          {orderDeliveryFree}
        </Text>
      </Box>
    </>
  );
}

export default DeliveryCalculator;
