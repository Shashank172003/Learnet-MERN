import { combineReducers } from "@reduxjs/toolkit"; // ✅ Fixed incorrect import
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer, 
  auth: authReducer, // ✅ Auth Reducer
});

export default rootReducer;
