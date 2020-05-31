import queryString from "query-string";

import { API_BASE_URL, BEARER__TOKEN } from "./config";

export function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}&${path}?${query}`, {
    headers: {
      Authorization: `bearer ${BEARER__TOKEN}`,
      Origin: "localhost",
      withCredentials: true,
    },
  });
}
