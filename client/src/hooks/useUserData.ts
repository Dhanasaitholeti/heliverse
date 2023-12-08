import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../services/state/slices/User.slice";

const useUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/");
        const userData = response.data.users;
        dispatch(updateData({ users: userData, error: false }));
      } catch (error) {
        dispatch(updateData({ users: null, error: true }));
      }
    };

    fetchData();
  }, [dispatch]);

  //   return {
  //     // Any additional state or values you want to expose
  //   };
};

export default useUserData;
