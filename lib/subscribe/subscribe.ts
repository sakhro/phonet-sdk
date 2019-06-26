"use strict";

import { callSubscribe } from "./subscribeService";

export const subscribeToCall = (subscriber: number | string) =>
  callSubscribe(subscriber);
