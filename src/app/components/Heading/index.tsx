"use client";
import { Dispatch, SetStateAction, useState } from "react";

import { Place } from "@/app/hooks/useSearch";

type HeadingProps = {
  place: Place;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const Heading = ({ place, setLoading }: HeadingProps) => {
  return (
    <div className="pt-10 pb-[0.5rem] text-center">
      <span className="text-xs text-slate-400">{place?.display_name}</span>
      <h3 className="uppercase font-bold">{place?.name}</h3>
      <p className="uppercase text-xs text-slate-600 text-center">Light rain</p>
    </div>
  );
};

export default Heading;
