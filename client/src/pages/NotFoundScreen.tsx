import { Flex, Heading, Text } from "@chakra-ui/react";

const NotFoundScreen = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      h="80vh"
      textAlign="center"
    >
      <Heading fontSize="6xl">404</Heading>
      <Text fontSize="2xl" color="gray.500">
        Oops! Page not found.
      </Text>
    </Flex>
  );
};

export default NotFoundScreen;
