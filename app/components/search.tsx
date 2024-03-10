"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  placeholder,
  search,
  setSearch,
}: {
  placeholder: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="relative flex flex-1 flex-shrink-0 mb-3">
      {/* <label htmlFor="search" className="sr-only">
        Search
      </label> */}
      <input
        type="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
