import { createSlice } from "@reduxjs/toolkit";
import { fetchInfoAccount, fetchLogin } from "./AuthAction";

const initialState = {
    token: localStorage.getItem("token"),
    name: localStorage.getItem("lastName"),
    id: localStorage.getItem("idUser"),
    imgUrl: localStorage.getItem("imgUrl"),
    role: localStorage.getItem("role"),
    isLoading: false,
    errMsg: "",
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = '';
            state.name = '';
            state.mssv = '';
            state.imgUrl = '';
            state.id = '';
            state.mssv = '';
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                const { id, token, role, lastName } = action.payload;
                localStorage.setItem("idUser", id);
                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
                localStorage.setItem("lastName", lastName);
                state.isLoading = false;
                state.role = role;
                state.id = id;
                state.name = lastName;
                state.token = token;
                state.errMsg = "";
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = "Tài khoản không chính xác!";
            })
            .addCase(fetchInfoAccount.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchInfoAccount.fulfilled, (state, action) => {
                localStorage.setItem("imgUrl", action.payload.avatar);
                state.isLoading = false;
                state.imgUrl = action.payload.avatar;
            })
            .addCase(fetchInfoAccount.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
});

export const { logout } = authSlice.actions