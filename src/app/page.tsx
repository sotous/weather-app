"use client";

import { useEffect, useState } from "react";

import Finder from "./components/Finder";
import Heading from "./components/Heading";
import WeatherComponent from "./components/WeatherComponent";
import { Place } from "./hooks/useSearch";

const Page = () => {
  const [place, setPlace] = useState<Place>({
    lat: "10.6746542",
    lon: "-71.6104397",
    name: "Maracaibo, VE",
    display_name: "Municipio Maracaibo, Zulia, 4002, Venezuela",
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location: any) => {
        console.log(location);
      });
    }
  }, []);

  // if (navigator.geolocation) {
  //     const currentLocation = await navigator.geolocation.getCurrentPosition((location) =>{
  //         console.log("current location", location);
  //     }, (err) => {
  //         console.error("!!! Couln't get location", err);
  //     });
  // } else {
  //     console.error("Navigator not supported.");
  // }
  return (
    <div className="flex flex-col justify-center items-center p-[3rem]">
      <Finder setPlace={setPlace} />
      <hr></hr>
      <Heading place={place} setLoading={setLoading} />
      <WeatherComponent place={place} />
    </div>
  );
};

export default Page;
