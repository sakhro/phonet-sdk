"use strict";
import { authorize } from "./authApi";

export const auth = (apiKey: string) =>
  authorize(apiKey);
