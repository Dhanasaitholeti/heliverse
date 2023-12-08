import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { UserType } from "../utils/types/user.types";

interface UserCardProps {
  user: UserType;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      mb={4}
      display="flex"
      alignItems="center"
    >
      <Image
        src={user.avatar}
        alt={user.first_name}
        boxSize={10}
        borderRadius="full"
        mr={4}
      />

      <Flex direction="column">
        <Text fontSize="xl" fontWeight="bold">
          {user.first_name} {user.last_name}
        </Text>
        <Text>Email: {user.email}</Text>
        <Text>Gender: {user.gender}</Text>
        <Text>Domain: {user.domain}</Text>
        <Text>Available: {user.available ? "Yes" : "No"}</Text>
      </Flex>
    </Box>
  );
};

export default UserCard;
