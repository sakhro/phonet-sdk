import { fetch } from "./api";

export let DOMAIN: string;
export let API_KEY: string;

export const setInitArgs = (initArgs: IInitArgs) => {
  DOMAIN = initArgs.domain;
  API_KEY = initArgs.apiKey;

  fetch.defaults.baseURL = `https://${DOMAIN}`;
};
