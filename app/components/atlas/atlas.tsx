"use client";
// import { useAtom, useAtomValue } from "jotai";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Node,
  Handle,
  NodeProps,
  NodeTypes,
  Position,
} from "reactflow";
import "reactflow/dist/base.css";
import "./atlas.css";
import MapImage from "./mapImage";
import {
  deduplicateEdge,
  mapLevelsWithVoidstone,
  mapTierColor,
} from "@/app/utils/atlasUtils";
import Link from "next/link";
import Image from "next/image";

import {
  monsterJson,
  cardJson,
  mapJson,
  globalDataJson,
  MapType,
  extendedMapType,
  extendedMapData,
  mapsOnAtlas,
} from "@/app/lib/result";
import { OFFSET, BGID, BGSCALE, NODESCALE } from "@/app/lib/constants";
import Modal from "./modal";
import AtlasBackgroundNode from "./atlasBackgroundNode";
import AtlasMapNode from "./atlasMapNode";
import AtlasSearchNode from "./atlasSearchNode";

// type BackgroundNodeDataType = {
//   image: string;
//   width: number;
//   height: number;
// };
// type MapNodeDataType = {
//   voidstones: number;
//   map: {
//     atlas: boolean;
//     name: string;
//     levels: number[];
//     icon: string;
//     type: string;
//   };
//   selectable: true;
// };
export type ModalStatusType = {
  isOpen: boolean;
  map: extendedMapType | undefined;
};
function makeMapNode(map: extendedMapType, voidstones: number) {
  return {
    id: map.name,
    parentNode: BGID,
    type: "map",
    position: {
      x: map.x! * NODESCALE + OFFSET,
      y: map.y! * NODESCALE + OFFSET,
    },
    data: {
      voidstones: voidstones,
      map: {
        atlas: map.atlas,
        name: map.name,
        levels: map.levels,
        icon: map.icon,
        type: map.type,
        pantheon: map.pantheon
          ? { isExist: true, name: map.pantheon }
          : { isExist: false, name: "" },
      },
    },
    selectable: true,
  };
}
function makeMapEdge(map: extendedMapType) {
  return map.connected!.map((c) => {
    const con = [map.name, c].sort();

    return {
      id: con[0] + "-" + con[1],
      source: con[0],
      target: con[1],
    };
  });
}
// function BackgroundNode({ data }: NodeProps<BackgroundNodeDataType>) {
//   return (
//     <div
//       style={{
//         width: data.width,
//         height: data.height,
//         // backgroundImage: `url('${data.image}')`,
//         // backgroundRepeat: "round",
//       }}
//     >
//       <img src={data.image} loading="lazy" />
//     </div>
//   );
// }

// function MapNode({ data }: NodeProps<MapNodeDataType>) {
//   const map = data.map;

//   const textColor = mapTierColor(map.levels, true, map.type, data.voidstones);

//   return (
//     <>
//       <Handle type="source" position={Position.Top} />
//       <Handle type="target" position={Position.Top} />

//       <div className="cursor-pointer">
//         {!!map.atlas && (
//           <MapImage
//             icon={map.icon}
//             level={mapLevelsWithVoidstone(map.levels, true, data.voidstones)}
//             type={map.type}
//           />
//         )}
//         <div
//           className={`px-1 absolute left-1/2 -translate-x-1/2 top-[105%] text-[13px] font-bold bg-[#212529] rounded-md whitespace-nowrap ${textColor}`}
//         >
//           {map.name}
//         </div>
//       </div>
//     </>
//   );
// }
const bgNode = [
  {
    id: BGID,
    type: "background",
    position: {
      x: 0,
      y: 0,
    },
    data: {
      image: "/img/atlas.webp",
      width:
        globalDataJson && globalDataJson.atlas
          ? globalDataJson.atlas.width * BGSCALE
          : 0,
      height:
        globalDataJson && globalDataJson.atlas
          ? globalDataJson.atlas.height * BGSCALE
          : 0,
    },
    zIndex: -1,
  },
];
const searchBar = [
  {
    id: "searchbar",
    type: "search",
    position: {
      x: 0,
      y: -720,
    },
    data: {},
  },
];
const nodes: Node[] = [
  ...bgNode,
  ...mapsOnAtlas.map((m) => makeMapNode(m, 0)),
  ...searchBar,
];
const edges = deduplicateEdge(
  mapsOnAtlas.flatMap((m) => makeMapEdge(m)),
  "id"
);

const nodeTypes: NodeTypes = {
  background: AtlasBackgroundNode,
  map: AtlasMapNode,
  search: AtlasSearchNode,
};

const Atlas = () => {
  const [modalStatus, setModalStatus] = useState<ModalStatusType>({
    isOpen: false,
    map: undefined,
  });
  const onNodeClick = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>, node: Node) => {
      if (node.id !== "bg" && node.id !== "searchbar")
        setModalStatus({
          isOpen: !modalStatus.isOpen,
          map: mapsOnAtlas.find((m) => m.name === node.id),
        });
    },
    [modalStatus]
  );

  return (
    <>
      <div className="w-screen h-screen">
        <ReactFlow
          zoomOnScroll={true}
          preventScrolling={true}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodeOrigin={[0.5, 0.5]}
          defaultEdgeOptions={{
            type: "simplebezier",
          }}
          proOptions={{
            hideAttribution: true,
          }}
          onNodeClick={
            onNodeClick
            //   (event, node) => {
            //   // console.log(node);
            //   if (node.id !== "bg")
            //     setModalStatus({
            //       isOpen: !modalStatus.isOpen,
            //       map: mapsOnAtlas.find((m) => m.name === node.id),
            //     });

            //   // console.log(modalStatus.map);
            // }
          }
          fitView
        />
      </div>
      {modalStatus.isOpen && (
        // <MapInfoModal
        //   modalStatus={modalStatus}
        //   setModalStatus={setModalStatus}
        // />
        <Modal modalStatus={modalStatus} setModalStatus={setModalStatus} />
      )}
    </>
  );
};

export default memo(Atlas);
