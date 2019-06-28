import { pathOr } from "ramda";

import { fetch, handleRequest } from "..//services/api";
import { API_KEY } from "../services/config";

const setCookie = (cookie: string) => {
  if (!cookie) {
    return;
  }

  fetch.defaults.headers.common = {
    ...fetch.defaults.headers.common,
    cookie,
  };
};

export const authorize = async () => {
  const res = await handleRequest("/rest/security/authorize", {
    data: { apiKey: API_KEY },
    method: "post",
  });

  setCookie(pathOr(null, ["headers", "set-cookie", 0], res));
};
