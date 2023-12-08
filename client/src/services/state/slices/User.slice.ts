import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../utils/types/user.types";

export interface stateType {
  users: UserType[] | null;
  error: boolean;
}

const initialState: stateType = {
  users: null,
  error: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<stateType>) => {
      state.users = action.payload.users;
      state.error = action.payload.error;
    },
  },
});

export const { updateData } = UserSlice.actions;

export default UserSlice.reducer;
