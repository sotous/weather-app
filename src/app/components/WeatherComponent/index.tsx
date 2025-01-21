"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Place } from "@/app/hooks/useSearch";
import useWeather from "@/app/hooks/useWeather";
import { CurrentConditions, Forecast } from "@/app/types/weather";

type WeatherComponentProps = {
  place: Place;
};

const WeatherComponent = ({ place }: WeatherComponentProps) => {
  const { getForecast } = useWeather();
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>();

  // On place changes, fetch forecast.
  useEffect(() => {
    (async () => {
      const forecastData = await getForecast(place.lat, place.lon);
      // Grab the available data from forecast to set current conditions.
      setCurrentConditions({
        minTemp: 0,
        maxTemp: 0,
        currentTemp: forecastData?.current.temperature_2m ?? 0,
        condition: "",
        windSpeed: forecastData?.current.wind_speed_10m ?? 0,
        windDirection: "N/A",
      });
    })();
  }, [place]);

  return (
    <>
      <div className="flex flex-col pt-10 text-gray-400 text-[10px]">
        <div className="flex justify-between items-center gap-x-2">
          <Image src={"/assets/img/thermometer.svg"} width={12} height={12} alt="Thermometer" />
          <div>10°</div>
          <div>/</div>
          <div className="text-black text-base font-semibold">
            {parseInt(`${currentConditions?.currentTemp ?? 0}`)}°
          </div>
          <div>/</div>
          <div>25°</div>
        </div>
        <div className="flex flex-row items-center">
          <Image src={"/assets/img/wind.svg"} width={20} height={20} alt="Wind" />
          <p className="text-center">
            {parseInt(`${currentConditions?.windSpeed ?? 0}`)} km/h, SE direction
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
