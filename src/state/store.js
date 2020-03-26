import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import artistsReducer from "./reducers/artists";

export default configureStore({
  reducer: {
    auth: authReducer,
    artists: artistsReducer
  }
});
