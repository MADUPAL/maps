import { WIKIBASE } from "@/app/lib/constants";
import { ModalStatusType } from "./atlas";
import AtlasHoverCard from "./atlasHoverCard";

export default function MapInfoModal({
  modalStatus,
  setModalStatus,
}: {
  modalStatus: ModalStatusType;
  setModalStatus: React.Dispatch<React.SetStateAction<ModalStatusType>>;
}) {
  let mapInfo: typeof modalStatus.map;
  if (modalStatus.map) {
    mapInfo = modalStatus.map;
  } else {
    return <div>map Info dosent exist</div>;
  }
  return (
    <div
      className="flex fixed w-screen h-screen top-0 left-0 justify-center items-center bg-black/30"
      onClick={() => {
        setModalStatus({ ...modalStatus, isOpen: !modalStatus.isOpen });
      }}
    >
      <div className="flex flex-col max-w-3xl w-full h-full rounded-xl bg-[#1E1F22]">
        <div className="m-2 p-2 justify-center items-center rounded-md bg-[#313338]">
          {/* <div className="text-[80px]">{mapInfo.name}</div> */}
        </div>
        <div className="flex min-h-[33%] h-auto mx-2 mb-2 p-2 justify-center items-center rounded-md bg-[#313338]">
          {mapInfo.image ? (
            <img
              key={mapInfo.name + " Layout Image"}
              src={mapInfo.image}
              loading="lazy"
              alt={mapInfo.name + " Layout Image"}
              className="rounded-md w-full h-full object-contain"
            />
          ) : (
            <div className="text-center text-white text-2xl">
              Layout doesnt exist
            </div>
          )}
        </div>
        <div className="h-auto mx-2 mb-2 p-2 rounded bg-[#313338]">
          {mapInfo.boss_names?.map((name, index) => (
            <div
              key={name.name + index}
              className="text-black bg-white m-1 px-1 rounded-md cursor-pointer"
              onClick={() =>
                window.open(WIKIBASE + name.name.replaceAll(" ", "_"))
              }
            >
              {name.name}
            </div>
          ))}
          {mapInfo.boss_ids?.map((name, index) => (
            <div
              key={name + index}
              className="text-black bg-white m-1 px-1 rounded-md cursor-pointer"
              onClick={() => window.open(WIKIBASE + "Monster:" + name)}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mx-2 mb-2 p-2 rounded bg-[#313338]">
          {mapInfo.card.map((c) => {
            return (
              <AtlasHoverCard key={c.name + " detail"} card={c}>
                <img
                  src="/img/icon/cardIcon.png"
                  width={16}
                  height={16}
                  alt=""
                  loading="lazy"
                  className="inline-block me-1"
                />
                {c.name}
              </AtlasHoverCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
