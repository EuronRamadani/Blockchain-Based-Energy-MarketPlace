import { configureStore } from "@reduxjs/toolkit";
import p2pReducer from "./p2pSlice";

export const store = configureStore({
  reducer: {
    p2p: p2pReducer,
  },
});
