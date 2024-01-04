import { createSlice } from "@reduxjs/toolkit";

export const repositorySlice = createSlice({
    name: 'repository',
    initialState:{
        Repositories: [],
        RepositoryDetails:"",
        Total: 0,
    },
    reducers:{
        setRepositories: (state, action)=>{
            state.Repositories = action.payload
        },
        setReposiotriesTotal: (state, action)=>{
            state.Total = action.payload
        },
        setRepositoryDetails:(state, action)=>{
            state.RepositoryDetails = action.payload
        },
       
    }
})

export const { setRepositories, setReposiotriesTotal, setRepositoryDetails } = repositorySlice.actions
export default repositorySlice.reducer