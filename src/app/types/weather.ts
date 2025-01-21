export type Forecast = {
  current: {
    temperature_2m: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    cloud_cover: number;
    is_day: number;
    sunshine_duration: number;
    lightning_potential: number | null;
  };
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
};
export type CurrentConditions = {
  minTemp: number;
  maxTemp: number;
  currentTemp: number;
  windSpeed: number;
  windDirection: string;
  condition: string; // Write conditions map.
};
