"use strict";
import { batch, searchByOLNum } from "./contactsService";

export const searchContactByPhoneNumber = async (phoneNumber: number | string) => {
  const { data } = await searchByOLNum(phoneNumber);

  return data;
};

export const postContacts = async (data: IBatchData) =>
  await batch(data);
