"use client";
import { debounce } from "lodash";
import { useState } from "react";

import useSearch, { Place } from "@/app/hooks/useSearch";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Finder = () => {
  const { getPlaces } = useSearch();
  const [debouncedCallApi] = useState(() => debounce(getPlaces, 300));
  const [finderOptions, setFinderOptions] = useState<Place[]>([]);

  const findPlaces = async (query: string) => {
    console.log(query);
    if (query !== "") {
      const places = (await debouncedCallApi(query)) ?? [];
      setFinderOptions(places);
      console.log(places);
    }
  };
  return (
    <div className="p-[1.5rem]">
      <Autocomplete
        freeSolo
        onKeyUp={(e: React.SyntheticEvent) => {
          findPlaces((e.target as HTMLInputElement).value);
        }}
        options={finderOptions}
        getOptionLabel={(option) => (option as Place).display_name}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Find places..." />}
      />
    </div>
  );
};

export default Finder;
