"use client";

import { debounce } from "lodash";

export type Place = {
  place_id: string;
  lat: string;
  lon: string;
  name: string;
  display_name: string;
};

const url = `https://nominatim.openstreetmap.org/`;

const useSearch = () => {
  const getPlacesByName = async (query: string, callback: (places: Place[]) => void) => {
    let places = [];
    try {
      const response = await fetch(`${url}search?q=${query}&format=jsonv2`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}, ${response.statusText}`);
      }
      places = await response.json();
      callback(places);
    } catch (error) {
      console.error(error);
      callback(places);
    }
  };

  const getPlaceByCoords = async (lat: number, lon: number) => {
    try {
      const response = await fetch(`${url}reverse?lat=${lat}&lon=${lon}&format=jsonv2`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}, ${response.statusText}`);
      }
      const foundPlace = await response.json();
      return foundPlace;
    } catch (error) {
      console.error(error);
    }
  };

  // Debounce the getPlacesByName function
  const debouncedGetPlacesByName = debounce(getPlacesByName, 1000);

  return { getPlacesByName: debouncedGetPlacesByName, getPlaceByCoords };
};

export default useSearch;
