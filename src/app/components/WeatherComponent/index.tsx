"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Place } from "@/app/hooks/useSearch";
import useWeather from "@/app/hooks/useWeather";
import { Conditions, Forecast, MeteorologicalParams, WEATHER_CODE_MAP } from "@/app/types/weather";
import { getConditionAnimation } from "@/app/utils/conditionAnimationManager";

type WeatherComponentProps = {
  place: Place | null;
};

enum CardinalPoints {
  N = "N",
  W = "W",
  E = "E",
  S = "S",
  NE = "NE",
  NW = "NW",
  SE = "SE",
  SW = "SW",
  NA = "N/A",
}

const WeatherComponent = ({ place }: WeatherComponentProps) => {
  const { getForecast } = useWeather();
  const [metorologicalParams, setMeteorologicalParams] = useState<MeteorologicalParams>();

  // On place changes, fetch forecast.
  useEffect(() => {
    (async () => {
      const forecastData = await getForecast(place?.lat ?? "0", place?.lon ?? "0");
      // Get current condition
      const currentCondition = getCurrentCondition(forecastData as Forecast);
      // Grab the available data from forecast to set current conditions.
      setMeteorologicalParams({
        minTemp: Math.min(...(forecastData?.apparent_temperature_min || [])) ^ 0,
        maxTemp: Math.max(...(forecastData?.apparent_temperature_max || [])) ^ 0,
        currentTemp: forecastData?.current.temperature_2m ?? 0,
        condition: currentCondition,
        windSpeed: forecastData?.current.wind_speed_10m ?? 0,
        // If not available pass an invalid value to set N/A
        windDirection: getWindDirection(forecastData?.current.wind_direction_10m ?? 361),
      });
    })();
  }, [place]);

  const getCurrentCondition = (forecast: Forecast): Conditions => {
    const currentConditionOptions = WEATHER_CODE_MAP[forecast.current.weather_code] ?? [];
    let currentCondition = currentConditionOptions[0] ?? Conditions.CLEAR_DAY;

    // If cloud cover is minor the partly cloudy param (63)
    // Then check winds.
    if (
      forecast.current.cloud_cover < 63 &&
      metorologicalParams?.windSpeed &&
      metorologicalParams?.windSpeed > 29
    ) {
      return Conditions.WIND;
    }

    // Check day or night conditions.
    // Having accountability for day is the left side of the array and night the right side of the array.
    if (currentConditionOptions.length === 2) {
      return forecast.current.is_day ? currentConditionOptions[0] : currentConditionOptions[1];
    }

    // Check weather with cloud threshold
    const weatherCodesCloudThresholdMap = new Map<number, number>([
      [3, 90],
      [45, 63],
      [48, 63],
      [95, 63],
    ]);

    const cloudCoverThreshold = weatherCodesCloudThresholdMap.get(forecast.current.weather_code);

    // If there is a weather pattern with cloud cover threshold follow the below logic.
    if (cloudCoverThreshold) {
      if (forecast.current.cloud_cover > cloudCoverThreshold) {
        return currentConditionOptions[0];
      }
      return forecast.current.is_day ? currentConditionOptions[1] : currentConditionOptions[2];
    }

    return currentCondition;
  };

  const getWindDirection = (degree: number): CardinalPoints => {
    const cardinalMap = [
      { min: 348, max: 360, direction: CardinalPoints.N },
      { min: 0, max: 12, direction: CardinalPoints.N },
      { min: 23, max: 68, direction: CardinalPoints.NE },
      { min: 68, max: 113, direction: CardinalPoints.E },
      { min: 113, max: 158, direction: CardinalPoints.SE },
      { min: 158, max: 203, direction: CardinalPoints.S },
      { min: 203, max: 248, direction: CardinalPoints.SW },
      { min: 248, max: 293, direction: CardinalPoints.W },
      { min: 293, max: 348, direction: CardinalPoints.NW },
    ];
    for (let i = 0; i < cardinalMap.length; i++) {
      const range = cardinalMap[i];

      // Check if the degree falls within the range
      if (
        (degree >= range.min && degree <= range.max) ||
        (range.min > range.max && (degree >= range.min || degree <= range.max))
      ) {
        return range.direction;
      }
    }
    return CardinalPoints.NA;
  };

  return (
    <>
      <p className="uppercase text-xs text-slate-600 text-center">
        {metorologicalParams?.condition.replace(/(?:_|DAY)/gi, " ")}
      </p>
      <Image
        src={`${getConditionAnimation(metorologicalParams?.condition ?? Conditions.CLEAR_DAY)}`}
        width={175}
        height={175}
        alt="Weather Condition"
      />
      <div className="flex flex-col pt-10 text-gray-400 text-[10px]">
        <div className="flex justify-between items-center gap-x-2">
          <Image src={"/assets/img/thermometer.svg"} width={12} height={12} alt="Thermometer" />
          <div>{metorologicalParams?.minTemp}°</div>
          <div>/</div>
          <div className="text-black text-base font-semibold">
            {parseInt(`${metorologicalParams?.currentTemp ?? 0}`)}°
          </div>
          <div>/</div>
          <div>{metorologicalParams?.maxTemp}°</div>
        </div>
        <div className="flex flex-row items-center">
          <Image src={"/assets/img/wind.svg"} width={20} height={20} alt="Wind" />
          <p className="text-center">
            {parseInt(`${metorologicalParams?.windSpeed ?? 0}`)} km/h,{" "}
            {metorologicalParams?.windDirection} direction
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
