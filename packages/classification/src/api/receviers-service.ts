import { AxiosPromise, AxiosResponse } from "axios";
import { Client } from "./client";
import { ClassificationModel, CreateClassificationModel } from "./types";

export const getReceivers = (): AxiosPromise<ClassificationModel[]> => {
  return Client.get("receiver");
};

export const updateReceiver = (
  receiver: ClassificationModel
): AxiosPromise<ClassificationModel> => {
  return Client.put(`receiver/${receiver.id}`, receiver);
};

export const deleteReceiver = (id: string): AxiosPromise<any> => {
  return Client.delete(`receiver/${id}`)
}

export const createReceiver = (receiver: CreateClassificationModel):Promise<AxiosResponse> => {
  return Client.post('receiver', receiver)
}