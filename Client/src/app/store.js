import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // ✅ Corrected import
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, courseApi.middleware), // ✅ Added middleware correctly
  devTools: process.env.NODE_ENV !== "production",
});

const initializeApp = async () => {
  await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();