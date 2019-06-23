"use strict";
import { searchByOLNum } from "./contactsApi";

export const searchContactByPhoneNumber = async (number: number) => {
  const { data } = await searchByOLNum(number);

  return data;
};
