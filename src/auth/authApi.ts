"use strict";
import { pathOr } from "ramda";
import { fetch, handleRequest } from "../api";

const setCookie = (cookie: string) => {
  if (!cookie) {
    return;
  }

  fetch.defaults.headers.common = {
    ...fetch.defaults.headers.common,
    cookie,
  };
};

export const authorize = async (apiKey: string) => {
  const res = await handleRequest("/rest/security/authorize", {
    method: "post",
    data: { apiKey },
  });

  setCookie(pathOr(null, ["headers", "set-cookie", 0], res));
};
