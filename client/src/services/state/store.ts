import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/User.slice";
import { stateType as userReducerType } from "./slices/User.slice";
export const store = configureStore({
  reducer: {
    userReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  userReducer: userReducerType;
};
