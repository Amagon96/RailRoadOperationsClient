import axios from "axios";
export const baseUrl = "http://localhost:8080/destination"

export const DestinationService = () => {
    return axios.get(baseUrl, {
        headers:{
            'Content-Type':'application/json'
        }
    })
}