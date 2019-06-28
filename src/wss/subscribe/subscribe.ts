import { subscribe } from "./subscribeService";

export const subscribeToCall = (subscriber: number | string) =>
  subscribe(subscriber);
