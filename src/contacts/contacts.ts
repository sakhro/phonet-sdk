"use strict";
import { searchByOLNum } from "./contactsService";

export const searchContactByPhoneNumber = async (phoneNumber: number) => {
  const { data } = await searchByOLNum(phoneNumber);

  return data;
};
