import { AxiosPromise } from "axios";
import { Client } from "./client";
import { ClassificationModel, CreateClassificationModel } from "./types";

export const getDestinations = (): AxiosPromise<ClassificationModel[]> => {
  return Client.get("destination");
};

export const updateDestination = (
  destination: ClassificationModel
): AxiosPromise<ClassificationModel> => {
  return Client.put(`destination/${destination.id}`, destination);
};

export const deleteDestination = (id: string) => {
  return Client.delete(`destination/${id}`)
}

export const createDestination = (destination: CreateClassificationModel) => {
  return Client.post('destination', destination)
}