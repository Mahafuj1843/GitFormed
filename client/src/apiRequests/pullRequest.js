import axios from "axios";
import store from "../store/store";
import { hideLoader, setNotification, showLoader } from "../store/state/settingSlice";
import { ErrorToast, SuccessToast } from "../helpers/formHelper";
import { getToken  } from "../helpers/sessionHelper";
import { setPullRequest } from "../store/state/pullReqSlice";
import { socket } from "../App";
const BaseURL = "http://localhost:8081/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const CreatePullRequest = (pull, repoId) =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/pull/createPullReq/" + repoId;
    return axios.post(URL, pull, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 201) {
            SuccessToast("Pull request has been created.")

            socket.emit("new pull", res.data)

            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        }else if (err.response.data.status === 403) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const PullReqListRequest = async (repoId) => {
    store.dispatch(showLoader())
    try {
        let url = BaseURL + "/pull/list/" + repoId
        
        const result = await axios.get(url);
         
        store.dispatch(hideLoader())
        if (result.status === 200) {
            if (result.data.length > 0) {
                store.dispatch(setPullRequest(result.data))
            } else {
                store.dispatch(setPullRequest([]))
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(hideLoader())
        ErrorToast("Something went wrong.")
    }
}

export const NotificationListRequest = async () => {
    try {
        let url = BaseURL + "/pull/myNotification" 
        
        const result = await axios.get(url, AxiosHeader);
        if (result.status === 200) {
            if (result.data.length > 0) {
                store.dispatch(setNotification(result.data))
            } else {
                store.dispatch(setNotification([]))
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const MarkAsReadRequest = async () => {
    try {
        let url = BaseURL + "/pull/markAsRead" 
        
        const result = await axios.put(url, {}, AxiosHeader);
        if (result.status === 200) {
                store.dispatch(setNotification([]))
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}