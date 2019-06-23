"use strict";
import { setDomain } from "./api";
import { auth } from "./auth/auth";
import { searchContactByPhoneNumber } from "./contacts/contacts";
import { validateInitArgs } from "./helpers";

export default (initArgs: IInitArgs) => {
  validateInitArgs(initArgs);
  setDomain(initArgs.domain);
  auth(initArgs.apiKey);

  return {
    searchContactByPhoneNumber,
  };
};
