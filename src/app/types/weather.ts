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
  condition: Conditions;
};

export enum Conditions {
  CLEAR_DAY = "clear_day",
  CLEAR_NIGHT = "clear_night",
  CLOUDY = "cloudy",
  OVERCAST_DAY = "overcast_day",
  OVERCAST_NIGHT = "overcast_night",
  PARTLY_CLOUDY_DAY = "partly_cloudy_day",
  PARTLY_CLOUDY_DAY_DRIZZLE = "partly_cloudy_day_drizzle",
  PARTLY_CLOUDY_DAY_HAIL = "partly_cloudy_day_hail",
  PARTLY_CLOUDY_DAY_RAIN = "partly_cloudy_day_rain",
  PARTLY_CLOUDY_DAY_SLEET = "partly_cloudy_day_sleet",
  PARTLY_CLOUDY_DAY_SNOW = "partly_cloudy_day_snow",
  PARTLY_CLOUDY_DAY_FOG = "partly_cloudy_day_fog",
  PARTLY_CLOUDY_DAY_HAZE = "partly_cloudy_day_haze",
  PARTLY_CLOUDY_NIGHT = "partly_cloudy_night",
  PARTLY_CLOUDY_NIGHT_DRIZZLE = "partly_cloudy_night_drizzle",
  PARTLY_CLOUDY_NIGHT_HAIL = "partly_cloudy_night_hail",
  PARTLY_CLOUDY_NIGHT_RAIN = "partly_cloudy_night_rain",
  PARTLY_CLOUDY_NIGHT_SLEET = "partly_cloudy_night_sleet",
  PARTLY_CLOUDY_NIGHT_SNOW = "partly_cloudy_night_snow",
  PARTLY_CLOUDY_NIGHT_FOG = "partly_cloudy_night_fog",
  PARTLY_CLOUDY_NIGHT_HAZE = "partly_cloudy_night_haze",
  DRIZZLE = "drizzle",
  HAIL = "hail",
  RAIN = "rain",
  SLEET = "sleet", // mix of rain and snow
  SNOW = "snow",
  WIND = "wind",
  MIST = "mist",
  THUNDERSTORMS = "thunderstorms",
  THUNDERSTORMS_RAIN = "thunderstorms_rain",
  THUNDERSTORMS_SNOW = "thunderstorms_snow",
  THUNDERSTORMS_DAY = "thunderstorms_day",
  THUNDERSTORMS_DAY_RAIN = "thunderstorms_day_rain",
  THUNDERSTORMS_DAY_SNOW = "thunderstorms_day_snow",
  THUNDERSTORMS_NIGHT = "thunderstorms_night",
  THUNDERSTORMS_NIGHT_RAIN = "thunderstorms_night_rain",
  THUNDERSTORMS_NIGHT_SNOW = "thunderstorms_night_snow",
  FOG = "fog",
  FOG_DAY = "fog_day",
  FOG_NIGHT = "fog_night",
  HAZE = "haze",
  HAZE_DAY = "haze_day",
  HAZE_NIGHT = "haze_night",
}
