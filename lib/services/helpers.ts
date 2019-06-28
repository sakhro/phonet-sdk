"use strict";

import { setInitArgs } from "@services/config";

export const validateInitArgs = (args: IInitArgs) => {
  if (!args.domain) {
    throw new Error("Please provide your domain");
  }

  if (!args.apiKey) {
    throw new Error("Please provide your apiKey");
  }

  setInitArgs(args);
};
