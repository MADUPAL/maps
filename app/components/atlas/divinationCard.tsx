import { CardType } from "@/app/lib/result";
import clsx from "clsx";

export default function DivinationCard({ card }: { card: CardType }) {
  return (
    <div className="absolute bottom-7 left-[-250px] translate-x-40">
      <div className="flex flex-col relative items-center">
        <div className="absolute top-3 w-[250px] text-center z-[3]">
          {card.name}
        </div>
        <div className="absolute top-[36px] left-[17px]">
          <img src={card.art} decoding="async" loading="lazy" />
        </div>
        <div className="absolute top-[192px] left-[25px] w-[45px] text-white text-center z-[3]">
          {card.stack}
        </div>
        <div className="flex absolute w-[250px] h-[200px] top-[200px] justify-center items-center text-white z-[3]">
          <div className="text-center">
            {card.reward.split(", ").map((r) => {
              return (
                <div
                  key={r}
                  className={clsx("", {
                    "text-[#D20000] font-bold": r === "Corrupted",
                  })}
                >
                  {r}
                </div>
              );
            })}
          </div>
        </div>

        <img
          src="/img/Divination_card_frame.png"
          loading="lazy"
          width={270}
          className="z-[2]"
        />
      </div>
    </div>
  );
}
