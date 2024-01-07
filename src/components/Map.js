import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Flex,
  HStack,
  Input,
  SkeletonText,
  Text,
  useBreakpointValue,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import DeliveryCalculator from "./DeliveryCalculator";

const center = { lat: 49.3287158, lng: -123.0856023 };

function Map() {
  const isWrapEnabled = useBreakpointValue({ base: true, md: false });
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [distanceValue, setDistanceValue] = useState("");
  const [showFreight, setShowFreight] = useState(false);

  /** @type React.MutableRefObject<HTMLInputElement> */
  //const originRef = useRef();

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    //originRef = process.env.REACT_APP_ORIGIN_ADDRESS;
    //if (originRef.current.value === "" || destiantionRef.current.value === "") {
    if (destiantionRef.current.value === "") {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      //origin: originRef.current.value,
      origin: process.env.REACT_APP_ORIGIN_ADDRESS,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDistanceValue(results.routes[0].legs[0].distance.value);
    setDuration(results.routes[0].legs[0].duration.text);
    setShowFreight(true);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDistanceValue("");
    setDuration("");
    setShowFreight(false);
    //originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box align="center" padding={2} width="100%">
        <Card align="center" width={{ base: "90%", md: "70%", xl: "50%" }}>
          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem width={"100%"}>
              <AccordionButton color="red" justifyContent={"right"}>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <CardHeader width="100%">
                  <HStack
                    spacing={4}
                    align="center"
                    wrap={isWrapEnabled ? "wrap" : "nowrap"}
                    maxW="md" // Adjust the maximum width based on your layout
                  >
                    <Box width="100%">
                      <Autocomplete>
                        <Input
                          type="text"
                          placeholder="Delivery Address"
                          ref={destiantionRef}
                          onFocus={clearRoute}
                        />
                      </Autocomplete>
                    </Box>
                    <Box width="100%">
                      <Button
                        colorScheme="blue"
                        type="submit"
                        onClick={calculateRoute}
                      >
                        Calculate Delivery
                      </Button>
                    </Box>
                  </HStack>
                </CardHeader>
                <Divider
                  width="90%"
                  color="#B5B5B5"
                  display={showFreight ? "block" : "none"}
                />
                <CardBody width="100%" display={showFreight ? "block" : "none"}>
                  <HStack width={"100%"}>
                    <Box width="100%">
                      <Text fontSize={{ base: "12px", md: "18px", lg: "20px" }}>
                        Distance: {distance}
                      </Text>
                    </Box>
                    <Box width="100%">
                      <Text fontSize={{ base: "12px", md: "18px", lg: "20px" }}>
                        Duration: {duration}
                      </Text>
                    </Box>
                  </HStack>
                </CardBody>
                <Divider
                  width="90%"
                  color="#B5B5B5"
                  display={showFreight ? "block" : "none"}
                />
                <CardFooter
                  width="100%"
                  display={showFreight ? "block" : "none"}
                >
                  <Box width="100%">
                    <DeliveryCalculator
                      distance={distanceValue}
                      isWrapEnabled={isWrapEnabled}
                    />
                  </Box>
                </CardFooter>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Card>
      </Box>
    </Flex>
  );
}

export default Map;
