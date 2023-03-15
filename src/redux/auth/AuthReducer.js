import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "./AuthAction";

const initialState = {
    token: localStorage.getItem("token"),
    name: localStorage.getItem("lastName"),
    mssv: '',
    id: '',
    imgUrl: localStorage.getItem("imgUrl"),
    role: 0,
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
                console.log(action.payload.data);
                const { id, token, image, lastName } = action.payload.data;
                localStorage.setItem("idUser", id);
                localStorage.setItem("token", token);
                localStorage.setItem("imgUrl", image);
                localStorage.setItem("lastName", lastName);
                state.isLoading = false;
                state.imgUrl = image;
                state.id = id;
                state.name = lastName;
                state.token = token;
                state.errMsg = "";
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = "Tài khoản không chính xác!";
            });
    }
});

export const { logout } = authSlice.actions