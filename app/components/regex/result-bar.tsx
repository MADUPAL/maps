"use client";

import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function ResultBar({
  result,
  reset,
}: {
  result: string;
  reset: () => void;
}) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setCopy(false);
  }, [result]);

  return (
    <div className="my-1 flex justify-between">
      <div className="flex items-center w-full">
        <div
          className={clsx("w-full py-2 md:py-4 mr-4 text-2xl cursor-pointer", {
            "text-green-500": copy === true,
            "text-white": copy === false,
          })}
          onClick={() => {
            navigator.clipboard.writeText(result);
            setCopy(true);
          }}
        >
          {result}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="bg-green-500 text-md md:text-xl p-2 md:p-4 mr-4 rounded-lg cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(result);
            setCopy(true);
          }}
        >
          copy
        </div>
        <div
          className="bg-red-500 text-md md:text-xl p-2 md:p-4 rounded-lg cursor-pointer"
          onClick={() => {
            reset();
          }}
        >
          reset
        </div>
      </div>
    </div>
  );
}
