import axios from "axios";

export const fetch = axios.create();

export const handleRequest = async (url: string, config: { [key: string]: any }) => {
  try {
    return await fetch(url, config);
  } catch (err) {
    throw new Error(`An error occurred while trying to connect ${url}`);
  }
};
