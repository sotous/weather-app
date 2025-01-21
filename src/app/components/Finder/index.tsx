"use client";
import { debounce } from "lodash";
import { Dispatch, SetStateAction, useState } from "react";

import useSearch, { Place } from "@/app/hooks/useSearch";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

type FinderProps = {
  setPlace: Dispatch<SetStateAction<Place>>;
};

const Finder = ({ setPlace }: FinderProps) => {
  const { getPlaces } = useSearch();
  const [debouncedCallApi] = useState(() => debounce(getPlaces, 300));
  const [finderOptions, setFinderOptions] = useState<Place[]>([]);

  const findPlaces = async (query: string) => {
    if (query !== "") {
      const places = (await debouncedCallApi(query)) ?? [];
      setFinderOptions(places);
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
        onChange={(e, value) => {
          if (value) {
            setPlace(value as Place);
          }
        }}
      />
    </div>
  );
};

export default Finder;
