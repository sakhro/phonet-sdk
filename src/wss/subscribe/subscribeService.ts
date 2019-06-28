import { API_KEY, DOMAIN } from "../../services/config";

export const subscribe = (subscriber: string | number) => {
  const url = `wss://${DOMAIN}/live/connector/v3/easy?domain=${DOMAIN}&apiKey=${API_KEY}&subscriber=${subscriber}`;

  return new WebSocket(url);
};
