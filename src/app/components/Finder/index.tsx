"use client";
import { Dispatch, SetStateAction, useState } from "react";

import useSearch, { Place } from "@/app/hooks/useSearch";
import ClearIcon from "@mui/icons-material/Clear";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

type FinderProps = {
  setPlace: Dispatch<SetStateAction<Place | null>>;
};

const Finder = ({ setPlace }: FinderProps) => {
  const [finderOptions, setFinderOptions] = useState<Place[]>([]);
  const [loadingOptions, setLoadingOptions] = useState(false);
  const { getPlaceByCoords, getPlacesByName } = useSearch();

  const findPlaces = (query: string) => {
    if (query !== "") {
      if (!loadingOptions) {
        setLoadingOptions(true);
      }
      getPlacesByName(query, (places) => {
        setFinderOptions(places);
        setTimeout(() => {
          setLoadingOptions(false);
        }, 1000);
      });
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location: GeolocationPosition) => {
        (async () => {
          const foundPlace = await getPlaceByCoords(
            location.coords.latitude,
            location.coords.longitude
          );
          setPlace(foundPlace);
        })();
      });
    }
  };

  return (
    <div className="flex gap-x-2 justify-between p-[1.5rem]">
      <Autocomplete
        freeSolo
        onKeyUp={(e: React.SyntheticEvent) => findPlaces((e.target as HTMLInputElement).value)}
        clearIcon={loadingOptions ? <CircularProgress size={20} /> : <ClearIcon />}
        options={finderOptions}
        filterOptions={(x) => x} // Disable internal filtering
        getOptionKey={(option) => (option as Place).place_id}
        getOptionLabel={(option) => (option as Place).display_name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Find places..." />}
        onChange={(e, value) => {
          if (value) {
            setPlace(value as Place);
            setLoadingOptions(false);
            // Blur the input to close the keyboard on mobile
            const inputElement = e.target as HTMLInputElement;
            inputElement.blur();
          }
        }}
      />
      <IconButton aria-label="get my location" onClick={getCurrentLocation}>
        <MyLocationIcon />
      </IconButton>
    </div>
  );
};

export default Finder;
