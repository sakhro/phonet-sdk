"use strict";
import { auth } from "@auth";
import { searchContactByPhoneNumber } from "@contacts";
import { validateInitArgs } from "@helpers";
import { subscribeToCall } from "@subscribe";

export default (initArgs: IInitArgs) => {
  validateInitArgs(initArgs);

  auth();

  return {
    searchContactByPhoneNumber,
    subscribeToCall,
  };
};
