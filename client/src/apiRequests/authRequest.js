import axios from "axios";
import store from "../store/store";
import { hideLoader, showLoader } from "../store/state/settingSlice";
import { ErrorToast, SuccessToast } from "../helpers/formHelper";
import { getToken, removeSessions, setToken, setUserDetails } from "../helpers/sessionHelper";
const BaseURL = "http://localhost:8081/api"

export const RegistrationRequest = (user) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/register";
    return axios.post(URL, user).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 201) {
            SuccessToast("Registration Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const LoginRequest = (user) => {
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/login";
    
    return axios.post(URL, user).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            setToken(res.data.token)
            setUserDetails(res.data.data)
            SuccessToast("Login Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        if (err.response.data.status === 400) {
            ErrorToast(err.response.data.message)
            return false;
        } else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const LogoutRequest = async() =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/auth/logout";

    return await axios.get(URL).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 200) {
            removeSessions()
            SuccessToast("Logout Successfull.")
            return true;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {
        store.dispatch(hideLoader())
        ErrorToast("Something Went Wrong")
        return false;
    })
}
