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
export type MeteorologicalParams = {
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
  CLOUDY = "cloudy", //3 and cloud_cover 100
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
  PARTLY_CLOUDY_NIGHT_FOG = "partly_cloudy_night_fog", // 45, 48 cloud_cover
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
  FOG = "fog", // 45, 48 cloud_cover 100
  FOG_DAY = "fog_day", // 45, 48
  FOG_NIGHT = "fog_night", // 45, 48
  HAZE = "haze",
  HAZE_DAY = "haze_day",
  HAZE_NIGHT = "haze_night",
}

export const WEATHER_CODE_MAP: Record<number, Conditions[]> = {
  0: [Conditions.CLEAR_DAY, Conditions.CLEAR_NIGHT],
  1: [Conditions.CLEAR_DAY, Conditions.CLEAR_NIGHT],
  2: [Conditions.PARTLY_CLOUDY_DAY, Conditions.PARTLY_CLOUDY_NIGHT],
  3: [Conditions.CLOUDY, Conditions.OVERCAST_DAY, Conditions.OVERCAST_NIGHT],
  45: [Conditions.FOG, Conditions.FOG_DAY, Conditions.FOG_NIGHT, Conditions.PARTLY_CLOUDY_DAY_FOG],
  48: [Conditions.FOG, Conditions.FOG_DAY, Conditions.FOG_NIGHT, Conditions.PARTLY_CLOUDY_DAY_FOG],
  51: [Conditions.PARTLY_CLOUDY_DAY_DRIZZLE, Conditions.PARTLY_CLOUDY_NIGHT_DRIZZLE],
  53: [Conditions.PARTLY_CLOUDY_DAY_DRIZZLE, Conditions.PARTLY_CLOUDY_NIGHT_DRIZZLE],
  55: [Conditions.DRIZZLE],
  56: [Conditions.DRIZZLE],
  57: [Conditions.DRIZZLE],
  61: [Conditions.PARTLY_CLOUDY_DAY_RAIN, Conditions.PARTLY_CLOUDY_NIGHT_RAIN],
  63: [Conditions.RAIN],
  65: [Conditions.THUNDERSTORMS_RAIN],
  66: [Conditions.PARTLY_CLOUDY_DAY_SLEET, Conditions.PARTLY_CLOUDY_NIGHT_SLEET],
  67: [Conditions.SLEET],
  71: [Conditions.PARTLY_CLOUDY_DAY_SNOW, Conditions.PARTLY_CLOUDY_NIGHT_SNOW],
  73: [Conditions.SNOW],
  75: [Conditions.THUNDERSTORMS_DAY_SNOW],
  77: [Conditions.SNOW],
  80: [Conditions.PARTLY_CLOUDY_DAY_RAIN, Conditions.PARTLY_CLOUDY_NIGHT_RAIN],
  81: [Conditions.RAIN],
  82: [Conditions.THUNDERSTORMS_DAY_RAIN],
  85: [Conditions.PARTLY_CLOUDY_DAY_SNOW, Conditions.PARTLY_CLOUDY_NIGHT_SNOW],
  86: [Conditions.SNOW],
  95: [Conditions.THUNDERSTORMS, Conditions.THUNDERSTORMS_DAY, Conditions.THUNDERSTORMS_NIGHT],
  96: [Conditions.THUNDERSTORMS],
  99: [Conditions.THUNDERSTORMS],
};
