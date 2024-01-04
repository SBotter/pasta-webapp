import React from "react";
import { Card, CardBody, Flex } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
  Text,
} from "@chakra-ui/react";

function NaviagationTab(props) {
  return (
    <Card maxW="100%">
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>Ingredients</Tab>
              <Tab>Suggestion</Tab>
              <Tab>Instructions</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <Flex flexDirection="row" flexWrap="wrap">
                  {props.ingredients.map((ing, index) => (
                    <Text
                      key={index}
                      style={{ flexBasis: "50%", marginBottom: "10px" }}
                    >
                      <i
                        className="fa-regular fa-circle-check"
                        style={{ marginRight: "5px" }}
                      />
                      {ing}
                    </Text>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                {props.suggestions.map((sugg, index) => (
                  <Text key={index}>
                    <i
                      key={index}
                      className="fa-regular fa-circle-check"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    {sugg}
                  </Text>
                ))}
              </TabPanel>
              <TabPanel>
                {props.instructions.map((inst, index) => (
                  <Text key={index}>
                    <i
                      key={index}
                      className="fa-regular fa-circle-check"
                      style={{ marginRight: "5px" }}
                    />{" "}
                    {inst}
                  </Text>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default NaviagationTab;
