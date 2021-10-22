import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CredentialsWithToken } from "../../util/interface/CredentialsWithToken";
import { initialState } from "./utils";

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<CredentialsWithToken>) => {
            state.isLoggedIn=true;
            state.token=action.payload;
        },
        logout: state => {
            state.isLoggedIn=false;
            state.token=null;
            return;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer