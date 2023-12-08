import UserCard from "../components/UserCard";
import useUserData from "../hooks/useUserData";
import { useSelector } from "react-redux";
import { RootState } from "../services/state/store";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";
import SearchFilters from "../components/SearchFilters";

const HomeScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageQueryParam = queryParams.get("page");
  const currentPage = pageQueryParam ? parseInt(pageQueryParam, 10) : 1;

  useUserData(currentPage);

  const { users, pageCount, error } = useSelector(
    (state: RootState) => state.userReducer
  );

  return (
    <Box p={4}>
      <SearchFilters />

      <SimpleGrid spacing={2} minChildWidth={"md"}>
        {!error ? (
          users ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <p>Error Occured</p>
        )}
      </SimpleGrid>

      {users && (
        <Pagination
          currentPage={currentPage} // Replace with the actual current page
          totalPages={pageCount} // Replace with the actual total pages
        />
      )}
    </Box>
  );
};

export default HomeScreen;
