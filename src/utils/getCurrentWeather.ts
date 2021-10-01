import { apiWeather } from "../services/apiWeather";
import { CurrentWeatherType } from "../@types/types";

export const getCurrentWeather = async (
  longitude: string,
  latitude: string
) => {
  try {
    const response = await apiWeather.get(
      `onecall?appid=${process.env.API_KEY_WEATHER}&lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,daily,alerts`
    );

    const current = response.data.current;

    return {
      dt: current.dt,
      humidity: current.humidity,
      windSpeed: current.wind_speed,
      temp: current.temp,
      weather: {
        main: current.weather[0].main,
        icon: current.weather[0].icon,
      },
    } as CurrentWeatherType;
  } catch (error) {
    console.log(error);
    return {};
  }
};
