"use client";

import { MapModType, mapMods } from "@/app/lib/result";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Search from "../search";
import { makeSafeSearch } from "@/app/utils/searchUtils";

export default function ModList({
  selected,
  setSelected,
  mods,
}: {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  mods: MapModType[];
}) {
  const [search, setSearch] = useState<string>("");

  mods = mods.filter((m) => m.korName.match(makeSafeSearch(search)));
  useEffect(() => {}, [selected]);

  return (
    <div className="flex flex-col">
      <Search
        placeholder="검색할 맵 모드를 입력하세요."
        search={search}
        setSearch={setSearch}
      />
      {mods.map((mod) => {
        const isSelected = selected.includes(mod.korName);

        return (
          <div
            key={mod.korName}
            className={clsx("my-1 p-2 rounded-lg cursor-pointer", {
              "text-red-500 bg-white font-bold": isSelected === true,
              "text-white": isSelected === false,
            })}
            onClick={() => {
              isSelected
                ? setSelected(selected.filter((m) => m !== mod.korName))
                : setSelected(selected.concat(mod.korName));
            }}
          >
            {mod.korName.replaceAll("|", " ")}
          </div>
        );
      })}
    </div>
  );
}
