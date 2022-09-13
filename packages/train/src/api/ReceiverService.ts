import axios from "axios";
export const baseUrl = "http://localhost:8080/receiver"

export const ReceiverService = () => {
    return axios.get(baseUrl, {
        headers:{
            'Content-Type':'application/json'
        }
    })
}