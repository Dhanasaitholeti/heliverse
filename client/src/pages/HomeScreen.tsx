import UserCard from "../components/UserCard";
import useUserData from "../hooks/useUserData";
import { useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { SimpleGrid } from "@chakra-ui/react";

const HomeScreen = () => {
  useUserData();

  const { users, error } = useSelector((state: RootState) => state.userReducer);

  if (error) {
    console.log("error has happened");
  }

  return (
    <SimpleGrid alignItems={"center"} columns={4}>
      {users ? (
        users.map((user) => <UserCard user={user} />)
      ) : (
        <p>This is loading lol</p>
      )}
    </SimpleGrid>
  );
};

export default HomeScreen;
