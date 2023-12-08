import UserCard from "../components/UserCard";
import useUserData from "../hooks/useUserData";
import { useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Pagination from "../components/Pagination";

const HomeScreen = () => {
  useUserData();

  const { users, error } = useSelector((state: RootState) => state.userReducer);

  if (error) {
    console.error("An error occurred:", error);
  }

  return (
    <Box p={4}>
      <SimpleGrid spacing={2} minChildWidth={"md"}>
        {users ? (
          users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>Loading...</p>
        )}
      </SimpleGrid>

      {users && (
        <Pagination
          currentPage={1} // Replace with the actual current page
          totalPages={10} // Replace with the actual total pages
        />
      )}
    </Box>
  );
};

export default HomeScreen;
