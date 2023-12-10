import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../services/state/slices/User.slice";

const useUserData = (currentPage: number, searchQueryParam?: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateData({ users: null, error: false, pageCount: 0 }));
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users?page=${currentPage}`
        );
        console.log(response.data);
        const userData = response.data.users;
        const pageCount = response.data.totalPages;
        dispatch(updateData({ users: userData, error: false, pageCount }));
      } catch (error) {
        dispatch(updateData({ users: null, error: true, pageCount: 0 }));
      }
    };

    fetchData();
  }, [dispatch, currentPage]);
};

export default useUserData;
