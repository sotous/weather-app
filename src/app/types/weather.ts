export type Forecast = {
  current: {
    temperature_2m: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    cloud_cover: number;
    cloud_cover_low: number;
    is_day: number;
    weather_code: number;
    lightning_potential: number;
    snowfall: number;
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
  CLEAR_DAY = "clear_day", //0
  CLEAR_NIGHT = "clear_night", //0
  CLOUDY = "cloudy", //3
  OVERCAST_DAY = "overcast_day", //3
  OVERCAST_NIGHT = "overcast_night", //3
  PARTLY_CLOUDY_DAY = "partly_cloudy_day", //2
  PARTLY_CLOUDY_DAY_DRIZZLE = "partly_cloudy_day_drizzle", // 51,53, cloud cover
  PARTLY_CLOUDY_DAY_HAIL = "partly_cloudy_day_hail", // 96, 99
  PARTLY_CLOUDY_DAY_RAIN = "partly_cloudy_day_rain", // 80, 81, 82 and cloud cover
  PARTLY_CLOUDY_DAY_SLEET = "partly_cloudy_day_sleet", // 66, 67 and cloud cover
  PARTLY_CLOUDY_DAY_SNOW = "partly_cloudy_day_snow", // 77, 85, 86 and cloud cover
  PARTLY_CLOUDY_DAY_FOG = "partly_cloudy_day_fog", // cloud_cover_low and cloud_cover
  PARTLY_CLOUDY_DAY_HAZE = "partly_cloudy_day_haze",
  PARTLY_CLOUDY_NIGHT = "partly_cloudy_night", //2
  PARTLY_CLOUDY_NIGHT_DRIZZLE = "partly_cloudy_night_drizzle", // 51,53, cloud cover
  PARTLY_CLOUDY_NIGHT_HAIL = "partly_cloudy_night_hail", // 96, 99
  PARTLY_CLOUDY_NIGHT_RAIN = "partly_cloudy_night_rain", // 80, 81, 82 and cloud cover
  PARTLY_CLOUDY_NIGHT_SLEET = "partly_cloudy_night_sleet", // 66, 67 and cloud cover
  PARTLY_CLOUDY_NIGHT_SNOW = "partly_cloudy_night_snow", // 77, 85, 86 and cloud cover
  PARTLY_CLOUDY_NIGHT_FOG = "partly_cloudy_night_fog", // cloud_cover_low and cloud_cover
  PARTLY_CLOUDY_NIGHT_HAZE = "partly_cloudy_night_haze",
  DRIZZLE = "drizzle", // 51, 53, 55 cloud_cover 100
  HAIL = "hail", // 99 cloud_cover 100
  RAIN = "rain", //80, 81, 82 cloud_cover 100
  SLEET = "sleet", // 66, 67 cloud_cover 100
  SNOW = "snow", // 71, 73, 75 cloud_cover 100
  WIND = "wind", // wind parameter greater than 20 km/h
  MIST = "mist",
  THUNDERSTORMS = "thunderstorms", // 95 cloud_cover 100
  THUNDERSTORMS_RAIN = "thunderstorms_rain", // 96 cloud_cover 100
  THUNDERSTORMS_SNOW = "thunderstorms_snow", // Lighting potential, cloud cover and snow_fall cloud_cover 100
  THUNDERSTORMS_DAY = "thunderstorms_day", // 95
  THUNDERSTORMS_DAY_RAIN = "thunderstorms_day_rain", // 96
  THUNDERSTORMS_DAY_SNOW = "thunderstorms_day_snow", // Lighting potential, cloud cover and snow_fall
  THUNDERSTORMS_NIGHT = "thunderstorms_night", // 95
  THUNDERSTORMS_NIGHT_RAIN = "thunderstorms_night_rain", // 96
  THUNDERSTORMS_NIGHT_SNOW = "thunderstorms_night_snow", // Lighting potential, cloud cover and snow_fall
  FOG = "fog", // cloud_cover_low 100
  FOG_DAY = "fog_day", // cloud_cover_low
  FOG_NIGHT = "fog_night", // cloud_cover_low
  HAZE = "haze",
  HAZE_DAY = "haze_day",
  HAZE_NIGHT = "haze_night",
}

/**
 * - First we will check no code conditions
 * - Then we will check cloud_cover 100 conditions
 * - Later, we'll check cloud_cover below 100 conditions
 * - Then we'll check day or night conditions
 */
