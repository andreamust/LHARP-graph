import { Link } from "react-router-dom";
import React from "react";
import {
  Flex,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerHeader,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

function MainNavigation() {
  return (
    <>
      <Drawer isOpen={true} placement="right" colorScheme={"orange"}>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            LHARP Visualisation
          </DrawerHeader>
          <DrawerBody>
            <Stack direction="column" spacing={"8px"}>
              <Button colorScheme={"orange"} border={"7px"}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button colorScheme={"orange"} border={"7px"}>
                <Link to={"/2d-graph"}>2D-graph</Link>
              </Button>
              <Button colorScheme={"orange"} border={"7px"}>
                <Link to={"/3d-graph"}>3D-graph</Link>
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MainNavigation;
