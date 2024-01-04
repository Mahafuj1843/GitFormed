import { createSlice } from "@reduxjs/toolkit";

export const pullReqSlice = createSlice({
    name: 'pullReq',
    initialState:{
        PullRequest: []
    },
    reducers:{
        setPullRequest: (state, action)=>{
            state.PullRequest = action.payload
        }
    }
})

export const { setPullRequest } = pullReqSlice.actions
export default pullReqSlice.reducer