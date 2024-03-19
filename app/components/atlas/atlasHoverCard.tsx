"use client";

import { CardType } from "@/app/lib/result";
import { useState } from "react";
import DivinationCard from "./divinationCard";

export default function AtlasHoverCard({ card }: { card: CardType }) {
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
        {card.boss !== undefined && card.boss && (
          <img
            src="/img/boss.webp"
            width={16}
            height={16}
            alt=""
            loading="lazy"
            className="inline-block me-1"
          />
        )}
        <img
          src="/img/icon/cardIcon.png"
          width={16}
          height={16}
          alt=""
          loading="lazy"
          className="inline-block me-1"
        />

        {card.name}
        {isVisible && <DivinationCard card={card} />}
      </div>
    </>
  );
}
