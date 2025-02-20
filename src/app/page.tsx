"use client";

import { useEffect, useState } from "react";

import Finder from "./components/Finder";
import Heading from "./components/Heading";
import WeatherComponent from "./components/WeatherComponent";
import { Place } from "./hooks/useSearch";

const defaultPlace = {
  place_id: "1",
  lat: "10.6746542",
  lon: "-71.6104397",
  name: "Maracaibo, VE",
  display_name: "Municipio Maracaibo, Zulia, 4002, Venezuela",
};

const Page = () => {
  const [place, setPlace] = useState<Place | null>(null);

  useEffect(() => {
    const storedPlace = JSON.parse(sessionStorage.getItem("place") || "null");
    setPlace(storedPlace || defaultPlace);
  }, []);

  useEffect(() => {
    if (place !== null && place !== defaultPlace) {
      sessionStorage.setItem("place", JSON.stringify(place));
    }
  }, [place]);

  return (
    <div className="flex flex-col justify-center items-center p-[3rem]">
      <Finder setPlace={setPlace} />
      <hr></hr>
      <Heading place={place} />
      <WeatherComponent place={place} />
    </div>
  );
};

export default Page;
