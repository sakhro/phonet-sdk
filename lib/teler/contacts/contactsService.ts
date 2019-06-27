"use strict";
import { handleRequest } from "@services/api";
import { AxiosResponse } from "axios";

export const searchByOLNum = async (otherLegNum: number | string): Promise<AxiosResponse<IContact>> =>
  await handleRequest("/crm/contacts/v2/searchByOLNum", {
    data: { otherLegNum },
  });

export const batch = async (data: IBatchData): Promise<AxiosResponse<IBatchResponce>> =>
  await handleRequest("/crm/contacts/v2/batch", {
    data,
    method: "post",
  });
