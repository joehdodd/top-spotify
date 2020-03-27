import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";

export default configureStore({
  reducer: {
    auth: authReducer,
    artists: artistsReducer,
    albums: albumsReducer
  }
});
