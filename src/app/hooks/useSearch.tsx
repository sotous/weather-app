"use client";

export type Place = {
  place_id: string;
  lat: string;
  lon: string;
  name: string;
  display_name: string;
};

const useSearch = () => {
  const url = `https://nominatim.openstreetmap.org/`;
  const getPlacesByName = async (query: string): Promise<Place[]> => {
    let places: Place[] = [];
    try {
      const response = await fetch(`${url}search?q=${query}&format=jsonv2`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}, ${response.statusText}`);
      }
      places = await response.json();
      return places;
    } catch (error) {
      console.error(error);
    } finally {
      return places;
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
  return { getPlacesByName, getPlaceByCoords };
};
export default useSearch;
