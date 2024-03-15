"use client";

import { CardType } from "@/app/lib/result";
import clsx from "clsx";
import { useState } from "react";
import DivinationCard from "./divinationCard";

export default function AtlasHoverCard({
  card,
  children,
}: {
  card: CardType;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      <div
        className="relative inline-block px-1 m-1 text-sm rounded-md bg-white"
        onMouseOver={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
      >
        {children}
        {isVisible && <DivinationCard card={card} />}
      </div>
    </>
  );
}
