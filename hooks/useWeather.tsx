import { useEffect, useState } from "react";
import { useLocation } from "./useLocation";
import {
  DEFAULT_TEMPERATURE,
  UNKNOWN_WEATHER_CODE,
  weatherDescriptions,
} from "@/constants/weather";

interface Weather {
  current_weather_units: {
    temperature: string;
    windspeed: string;
    weathercode: string;
  };
  current_weather: {
    temperature: number;
    weathercode: number;
    windspeed: number;
  };
}

export const useWeather = () => {
  const { location } = useLocation();
  const [weather, setWeather] = useState<Weather>();

  const currentTemperature =
    (weather?.current_weather?.temperature ?? 0) +
    (weather?.current_weather_units?.temperature ?? DEFAULT_TEMPERATURE);

  const wheatherCode =
    weather?.current_weather?.weathercode ?? UNKNOWN_WEATHER_CODE;

  const currentCondition =
    weatherDescriptions[wheatherCode as keyof typeof weatherDescriptions];

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location?.coords.latitude}&longitude=${location?.coords.longitude}&current_weather=true`
    )
      .then((response) => response.json())
      .then(setWeather);
  }, [location]);

  return {
    currentTemperature,
    currentCondition,
  };
};
