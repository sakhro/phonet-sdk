"use strict";
import { handleRequest } from "@api";
import { AxiosResponse } from "axios";

export const searchByOLNum = async (otherLegNum: number): Promise<AxiosResponse<IContact>> =>
  await handleRequest("/crm/contacts/v2/searchByOLNum", {
    data: { otherLegNum },
  });
