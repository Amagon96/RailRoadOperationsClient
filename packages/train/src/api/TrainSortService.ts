import axios from "axios";
import { ITrainCar } from "../types/TrainCar";
export const baseUrl = "http://localhost:8080/trains/railroadoperations"

export const TrainSort = (trainCars: Map<string, ITrainCar>) => {
    const request = Array.from(trainCars).map(([id, trainCar]) => trainCar)
    return axios.post<ITrainCar[]>(baseUrl, request, {
        headers:{
            'Content-Type':'application/json'
        }
    })
}