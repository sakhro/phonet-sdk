"use strict";
import { auth } from "@auth";
import { validateInitArgs } from "@services/helpers";
import * as teler from "@teler";
import * as wss from "@wss";

export default (initArgs: IInitArgs) => {
  validateInitArgs(initArgs);

  auth();

  return {
    teler,
    wss,
  };
};
