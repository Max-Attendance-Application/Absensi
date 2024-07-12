import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    employeeList: null,
    absenlist: null,
    isError: false,
    IsSuccess: false,
    IsLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("user/LoginUser", async(user, thunkAPI) => {
    try{
        const response = await axios.post("http://localhost:5000/login", {
            email: user.email,
            password: user.password
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
    try{
        const response = await axios.get("http://localhost:5000/me",);
        return response.data.user;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const LogOut = createAsyncThunk("user/LogOut", async() => {
     await axios.delete("http://localhost:5000/logout",);
})

export const getallemployee = createAsyncThunk("user/getallemployee", async(_, thunkAPI) => {
    try{
        const response = await axios.get("http://localhost:5000/users",);
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const getallabsen = createAsyncThunk("user/getallabsen", async(_, thunkAPI) => {
    try{
        const response = await axios.get("http://localhost:5000/absen",);
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) =>  {
            state.IsLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.IsLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Get User Login
        builder.addCase(getMe.pending, (state) =>  {
            state.IsLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action) => {
            state.IsLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Get all employee
        builder.addCase(getallemployee.pending, (state) =>  {
            state.IsLoading = true;
        });
        builder.addCase(getallemployee.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsSuccess = true;
            state.employeeList = action.payload;
        });
        builder.addCase(getallemployee.rejected, (state, action) => {
            state.IsLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

        //Get all absen
        builder.addCase(getallabsen.pending, (state) =>  {
            state.IsLoading = true;
        });
        builder.addCase(getallabsen.fulfilled, (state, action) => {
            state.IsLoading = false;
            state.IsSuccess = true;
            state.absenlist = action.payload;
        });
        builder.addCase(getallabsen.rejected, (state, action) => {
            state.IsLoading = false;
            state.isError = true;
            state.message = action.payload;
        });

    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;