import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./state/settingSlice";
import repositorySlice from "./state/repositorySlice";
import pullReqSlice  from "./state/pullReqSlice";

export default configureStore({
    reducer:{
        setting: settingSlice,
        repository: repositorySlice,
        pullReq: pullReqSlice
    }
})