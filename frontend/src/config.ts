const serverPort = "3030";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/"
    : `//localhost:${serverPort}/api/`;
