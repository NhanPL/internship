import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from "../../services/AuthService";

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        const response = await AuthService.login(username, password);
        if (response.status === 200) {
            
            return response.data;
        }
        else {
            return rejectWithValue(response.data);
        }
    });