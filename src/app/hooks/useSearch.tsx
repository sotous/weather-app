"use client";

export type Place = {
  place_id: string;
  lat: string;
  lon: string;
  name: string;
  display_name: string;
};

const useSearch = () => {
  const url = `https://nominatim.openstreetmap.org/search`;
  const getPlaces = async (query: string) => {
    try {
      const response = await fetch(`${url}?q=${query}&format=json`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}, ${response.statusText}`);
      }
      const places = await response.json();
      return places;
    } catch (error) {
      console.error(error);
    }
  };
  return { getPlaces };
};
export default useSearch;
