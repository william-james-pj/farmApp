import axios from "axios";

export const apiGeocodificacao = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
});
