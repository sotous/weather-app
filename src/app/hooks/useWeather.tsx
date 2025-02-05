"use client";
import { OpenMeteoResponse } from "../types/openMeteo";
import { Forecast } from "../types/weather";

const useWeather = () => {
  const getForecast = async (lat: string, lon: string): Promise<Forecast | null> => {
    /**
     * 10m for Wind Speed, Wind Gusts and Wind Direction is set by default.
     * As 10m means that the API is delivering the wind data based on that altitude, 10 meters.
     */
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=apparent_temperature_max&daily=apparent_temperature_min&timezone=auto&current=temperature_2m&current=wind_speed_10m&current=wind_direction_10m&current=wind_gusts_10m&current=cloud_cover&current=is_day&current=lightning_potential&current=cloud_cover_low&current=snowfall&current=weather_code`;
    let forecast = null;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}, ${response.statusText}`);
      }
      const data: OpenMeteoResponse = await response.json();

      forecast = {
        current: {
          temperature_2m: data.current.temperature_2m,
          wind_speed_10m: data.current.wind_speed_10m,
          wind_direction_10m: data.current.wind_direction_10m,
          cloud_cover: data.current.cloud_cover,
          cloud_cover_low: data.current.cloud_cover_low,
          is_day: data.current.is_day,
          weather_code: data.current.weather_code,
          lightning_potential: data.current.lightning_potential,
          snowfall: data.current.snowfall,
        },
        apparent_temperature_max: data.daily.apparent_temperature_max,
        apparent_temperature_min: data.daily.apparent_temperature_min,
      };
    } catch (error) {
      console.error(error);
    } finally {
      return forecast;
    }
  };
  return { getForecast };
};
export default useWeather;
