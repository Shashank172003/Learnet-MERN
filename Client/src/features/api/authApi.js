import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "../../features/authSlice.js"; // ✅ Fixed import path

const USER_API = "http://localhost:8080/api/v1/user/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url: "register",
        method: "POST",
        body: inputData,
      }),
    }),

    loginUser: builder.mutation({
      query: (inputData) => ({
        url: "login",
        method: "POST",
        body: inputData,
      }),
      logoutUser: builder.mutation({
        query: () => ({
          url: "logout",
          method: "GET",
        }),
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
          dispatch(authApi.util.invalidateTags(["User"])); // ✅ Refetch User Data
        } catch (error) {
          console.error("Login Error:", error);
        }
      },
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "logout",
        method: "GET",
      }),
      async onQueryStarted(_, {queryFulfilled, dispatch}) {
        try { 
            dispatch(userLoggedOut());
        } catch (error) {
            console.log(error);
        }
    }
    }),


    loadUser: builder.query({
      query: () => ({
        url: "profile",
        method: "GET",
      }),
      providesTags: ["User"], // ✅ This ensures automatic refetching

      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result.data.user }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateUser: builder.mutation({
      query: (formData) => ({
        url: "/profile/update",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLoadUserQuery,
  useUpdateUserMutation,
} = authApi;
