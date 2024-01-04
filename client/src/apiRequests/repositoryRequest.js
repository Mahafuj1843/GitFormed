import axios from "axios";
import store from "../store/store";
import { hideLoader, showLoader } from "../store/state/settingSlice";
import { ErrorToast, SuccessToast } from "../helpers/formHelper";
import { getToken  } from "../helpers/sessionHelper";
import { setReposiotriesTotal, setRepositories, setRepositoryDetails } from "../store/state/repositorySlice";
const BaseURL = "http://localhost:8081/api"
const AxiosHeader = { headers: { "token": getToken() } }

export const CreateRepositoryRequest = (repository) =>{
    store.dispatch(showLoader())
    let URL = BaseURL + "/repository/createRepository";
    return axios.post(URL, repository, AxiosHeader).then((res) => {
        store.dispatch(hideLoader())
        if (res.status === 201) {
            SuccessToast("Repository has been created.")
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
        } else if (err.response.data.status === 401) {
            ErrorToast(err.response.data.message)
            return false;
        }else if (err.response.data.status === 404) {
            ErrorToast(err.response.data.message)
            return false;
        }else if (err.response.data.status === 409) {
            ErrorToast(err.response.data.message)
            return false;
        } else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
}

export const RepoDetailsById = async (id) => {
    try {
        let url = BaseURL + "/repository/" + id;
        const result = await axios.get(url);
        if (result.status === 200) {
                store.dispatch(setRepositoryDetails(result.data))
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const RepositoryListRequest = async (pageNo, perPage, searchKey, sort) => {
    store.dispatch(showLoader())
    try {
        let url = BaseURL + `/repository/list?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}&sort=${sort}`;
        
        const result = await axios.get(url);

        store.dispatch(hideLoader())
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setRepositories(result.data.data[0].Row))
                store.dispatch(setReposiotriesTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setRepositories([]))
                store.dispatch(setReposiotriesTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(hideLoader())
        ErrorToast("Something went wrong.")
    }
}

export const MyRepositoryListRequest = async (pageNo, perPage, searchKey, sort) => {
    store.dispatch(showLoader())
    try {
        let url = BaseURL + `/repository/myRepoList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}&sort=${sort}`;
        
        const result = await axios.get(url, AxiosHeader);

        store.dispatch(hideLoader())
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setRepositories(result.data.data[0].Row))
                store.dispatch(setReposiotriesTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setRepositories([]))
                store.dispatch(setReposiotriesTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(hideLoader())
        ErrorToast("Something went wrong.")
    }
}

export const RepoWatchingRequest = async (id) => {
    try {
        let url = BaseURL + "/repository/watch/" + id;
        
        const result = await axios.put(url, {}, AxiosHeader);
        if (result.status === 200) {
                store.dispatch(setRepositoryDetails(result.data))
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        ErrorToast("Something went wrong.")
    }
}

export const WatchingRepositoryListRequest = async (pageNo, perPage, searchKey, sort) => {
    store.dispatch(showLoader())
    try {
        let url = BaseURL + `/repository/myWatchingRepoList?pageNo=${pageNo}&perPage=${perPage}&searchKey=${searchKey}&sort=${sort}`;
        
        const result = await axios.get(url, AxiosHeader);

        store.dispatch(hideLoader())
        if (result.status === 200) {
            if (result.data.data[0].Row.length > 0) {
                store.dispatch(setRepositories(result.data.data[0].Row))
                store.dispatch(setReposiotriesTotal(result.data.data[0].Total[0].total))
            } else {
                store.dispatch(setRepositories([]))
                store.dispatch(setReposiotriesTotal(0))
                ErrorToast("No data found.")
            }
        } else {
            ErrorToast("Something went wrong.")
        }
    } catch (error) {
        store.dispatch(hideLoader())
        ErrorToast("Something went wrong.")
    }
}
