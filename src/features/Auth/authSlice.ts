import { createSlice } from "@reduxjs/toolkit";

import { IUserResponce, UserRole } from "../../types/auth/authenticationDTO";
import { authAPI } from "../../services/auth/authentication.api";
const initialState: IUserResponce = {
  jwtToken: '',
  role: null
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.auth.matchFulfilled,
      (state, payload) => {
        const role = payload.payload.role;
        switch (role) {
          case "ADMIN":
            state.role = UserRole.ADMIN;
            break;
          case "MANAGER":
            state.role = UserRole.MANAGER;
            break;
          case "DOCTOR":
            state.role = UserRole.DOCTOR;
            break;
          case "CLIENT":
            state.role = UserRole.CLIENT;
            break;
        }
        state.jwtToken = payload.payload.jwtToken;
      }
    );
  },
});

export default authSlice.reducer;
