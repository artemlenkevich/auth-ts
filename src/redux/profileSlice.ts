import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../api";

interface IProfileState {
    city: string | null
    languages: Array<string> | null
    social: Array<{ label: string, link: string }> | null
}

const initialState: IProfileState = {
    city: null,
    languages: null,
    social: null
}

export const getUserInfo = createAsyncThunk(
    'profile/getUserInfo',
    async (id: number) => {
        try {
            const data = await profileApi.getUserInfo(id)
            switch(data.status) {
                case 'ok':
                    return data;
                case 'err':
                    console.log('err getUserInfoLoading');
            }
        } catch (e) {
            console.log(e);
        }
    }
)

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})