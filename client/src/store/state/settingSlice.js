import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: 'setting',
    initialState: {
        loader: 'none',
        ProfileDetails: "",
        notifications: [],
    },

    reducers:{
        showLoader:(state)=>{
            state.loader= "block"
        },
        hideLoader:(state)=>{
            state.loader= 'none'
        },
        setProfileDetails:(state, action)=>{
            state.ProfileDetails = action.payload
        },
        setNotification:(state, action)=>{
            state.notifications = action.payload

        },
        emptyNotification:(state, action)=>{
            state.notifications = []
        }
    }
})

export const { showLoader, hideLoader, setNotification, removeNotification, emptyNotification } = settingSlice.actions
export default settingSlice.reducer