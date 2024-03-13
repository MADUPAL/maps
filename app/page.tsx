"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ModeList from "./components/regex/mapModList";
import ResultBar from "./components/regex/result-bar";
import { makeDontWant, makeWant } from "./utils/searchUtils";
import { mapMods } from "./lib/result";

export default function Home() {
  const [dontWant, setDontWant] = useState<string[]>([]);
  const [want, setWant] = useState<string[]>([]);
  const [korResult, setKorResult] = useState<string>("");
  const [engResult, setEngResult] = useState<string>("");

  const MODS = Array.from(Object.keys(mapMods));
  const dontWantMods = MODS.map((m) => ({ ...mapMods[m] })).sort(
    (a, b) => b.deadly - a.deadly
  );
  const wantMods = MODS.map((m) => ({ ...mapMods[m] })).sort(
    (a, b) => a.deadly - b.deadly
  );
  const { dontWantKor, dontWantEng } = makeDontWant(dontWant);
  // const wantResult = makeWant(wantMods);

  useEffect(() => {
    setKorResult(dontWantKor);
    setEngResult(dontWantEng);
  }, [korResult, want, dontWant]);

  function reset() {
    setDontWant([]);
    setWant([]);
    setKorResult("");
    setEngResult("");
  }

  return (
    <div className="flex-grow p-3 md:overflow-y-auto">
      <div className="flex flex-col space-y-2 min-h-screen max-w-5xl mx-auto">
        <div className="flex h-14 shrink-0 rounded-lg md:h-20 items-center justify-center bg-[#313338]">
          <p className="text-3xl md:text-5xl text-white">REGEX</p>
        </div>
        <div className="flex flex-col h-14 md:h-20 shrink-0 rounded-lg p-4 items-left justify-center bg-[#313338]">
          <ResultBar result={korResult} reset={reset} />
        </div>
        <div className="flex flex-col h-14 md:h-20 shrink-0 rounded-lg p-4 items-left justify-center bg-[#313338]">
          <ResultBar result={engResult} reset={reset} />
        </div>
        <div className="flex h-full w-full gap-2">
          <div className="w-1/2 p-4 bg-[#313338] rounded-lg">
            <div className="mb-5 text-white text-2xl md:text-3xl">
              dont want
            </div>
            <ModeList
              selected={dontWant}
              setSelected={setDontWant}
              mods={dontWantMods}
            />
          </div>
          <div className="w-1/2 p-4 bg-[#313338] rounded-lg">
            <div className="mb-5 text-white text-2xl md:text-3xl">want</div>
            <ModeList selected={want} setSelected={setWant} mods={wantMods} />
          </div>
        </div>
      </div>
    </div>
  );
}
