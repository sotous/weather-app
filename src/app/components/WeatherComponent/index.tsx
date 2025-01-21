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
  const [forecast, setForecast] = useState<Forecast>();
  const [currentConditions, setCurrentConditions] = useState<CurrentConditions>();

  // On place changes, fetch forecast.
  useEffect(() => {
    (async () => {
      const forecastData = await getForecast(place.lat, place.lon);
      setForecast(forecastData ?? undefined);
    })();
  }, [place, getForecast]);

  return (
    <>
      <div className="flex flex-col pt-10 text-gray-400 text-[10px]">
        <div className="flex justify-between items-center gap-x-2">
          <Image src={"/assets/img/thermometer.svg"} width={12} height={12} alt="Thermometer" />
          <div>10°</div>
          <div>/</div>
          <div className="text-black text-base font-semibold">
            {parseInt(`${currentConditions?.minTemp ?? 0}`)}°
          </div>
          <div>/</div>
          <div>25°</div>
        </div>
        <div className="flex flex-row items-center">
          <Image src={"/assets/img/wind.svg"} width={20} height={20} alt="Wind" />
          <p className="text-center">4 mph, SE direction</p>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
