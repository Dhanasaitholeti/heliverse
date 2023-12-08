import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex>
      <Heading>GetUsers</Heading>
      <HStack>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Teams</Link>
        <Link to={"/"}>Login</Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
