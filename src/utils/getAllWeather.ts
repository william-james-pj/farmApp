import uuid from "react-native-uuid";
import { apiWeather } from "../services/apiWeather";
import {
  CurrentWeatherType,
  HourlyWeatherType,
  DailyWeatherType,
} from "../@types/types";

export const getAllWeather = async (longitude: string, latitude: string) => {
  try {
    const response = await apiWeather.get(
      `onecall?appid=${process.env.API_KEY_WEATHER}&lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts`
    );

    const data = response.data;

    const current: CurrentWeatherType = {
      dt: data.current.dt,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_speed,
      temp: data.current.temp,
      weather: {
        main: data.current.weather[0].main,
        icon: data.current.weather[0].icon,
      },
    };

    const hourly: HourlyWeatherType[] = [];
    for (let index = 1; index < 14; index++) {
      hourly.push({
        id: `${uuid.v4()}`,
        dt: data.hourly[index].dt,
        icon: data.hourly[index].weather[0].icon,
        temp: data.hourly[index].temp,
      });
    }

    const daily: DailyWeatherType[] = [];
    for (let index = 1; index < 6; index++) {
      daily.push({
        id: `${uuid.v4()}`,
        dt: data.daily[index].dt,
        maxValue: data.daily[index].temp.max,
        minValue: data.daily[index].temp.min,
        icon: data.daily[index].weather[0].icon,
      });
    }

    return { current, hourly, daily };
  } catch (error) {
    console.log(error);
    const current: CurrentWeatherType = {};

    const hourly: HourlyWeatherType[] = [];

    const daily: DailyWeatherType[] = [];

    return { current, hourly, daily };
  }
};
