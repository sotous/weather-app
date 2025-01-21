export type OpenMeteoResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
    cloud_cover: number;
    is_day: number;
    sunshine_duration: number;
    lightning_potential: number | null;
  };
  daily_units: {
    time: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
  };
  daily: {
    time: string[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
  };
};
