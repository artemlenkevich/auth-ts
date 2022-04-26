import axios from "axios";
import { AuthApi } from "./types";

const baseURL = 'https://mysterious-reef-29460.herokuapp.com/api/v1';
const apiClient = axios.create({ baseURL });

export const authApi = {
    logIn({ email, password }: AuthApi.LogInParams) {
        return apiClient.post('validate', { email, password })
                .then(r => r.data )
                .catch(e => console.log(e))
    }
}

export const profileApi = {
    getUserInfo(id: number) {
        return apiClient.get(`user-info/${id}`)
                .then(r => r.data)
                .catch(e => console.log(e))

    }
}