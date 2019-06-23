"use strict";
import { AxiosResponse } from "axios";
import { handleRequest } from "../api";

export const searchByOLNum = async (otherLegNum: number): Promise<AxiosResponse<IContact>> =>
  await handleRequest("/crm/contacts/v2/searchByOLNum", {
    data: { otherLegNum },
  });
