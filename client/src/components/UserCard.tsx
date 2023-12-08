import { Badge, Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { UserType } from "../utils/types/user.types";

interface UserCardProps {
  user: UserType;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
      bg="white"
    >
      <Center>
        <Image
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          borderRadius="full"
          boxSize="100px"
          bgColor={"blue.500"}
        />
      </Center>
      <Flex justify="space-between" align="baseline" mt={2}>
        <Badge
          borderRadius="full"
          px="2"
          colorScheme={user.available ? "green" : "red"}
        >
          {user.available ? "Available" : "Not Available"}
        </Badge>
        <Text color="gray.500" fontSize="sm">
          ID: {user.id}
        </Text>
      </Flex>
      <Text mt={2} fontWeight="semibold" fontSize="xl">
        {user.first_name} {user.last_name}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {user.email}
      </Text>
      <Text color="gray.500" fontSize="sm">
        Gender: {user.gender}
      </Text>
      <Text color="gray.500" fontSize="sm">
        Domain: {user.domain}
      </Text>
    </Box>
  );
};

export default UserCard;
