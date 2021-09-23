import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.countrystatecity.in/v1",
  headers: {
    get: {
      "X-CSCAPI-KEY": process.env.API_KEY,
    },
  },
});
