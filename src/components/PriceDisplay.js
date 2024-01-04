import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Divider,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

function PriceDisplay(props) {
  return (
    <Card>
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Heading size="md">Packaging</Heading>
          <Divider />
          <HStack
            spacing="4"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            {props.package.map((pack, index) => (
              <Stat key={index}>
                <StatLabel key={index}>{pack.size}</StatLabel>
                <StatNumber key={index}>
                  <i class="fa-solid fa-circle-dollar-to-slot" /> {pack.price}
                </StatNumber>
                <StatHelpText key={index}>{pack.description}</StatHelpText>
              </Stat>
            ))}
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default PriceDisplay;
