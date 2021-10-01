import { apiGeocodificacao } from "../services/apiGeocodificacao";

const apiKey = process.env.API_KEY_GEOCODIFICACAO;

export const getGeocodificacao = async (
  countryCode: string,
  stateCode: string,
  city: string
) => {
  try {
    const response = await apiGeocodificacao.get(
      `${city}%2C${stateCode}%2C${countryCode}.json?access_token=${apiKey}&autocomplete=false&types=place&limit=1`
    );

    const coordinates = response.data.features[0].geometry.coordinates;

    return {
      longitude: parseFloat(coordinates[0]).toFixed(4) || "0.0",
      latitude: parseFloat(coordinates[1]).toFixed(4) || "0.0",
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};
