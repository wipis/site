"use client";

import React, { useState } from "react";

const TILE_SIZE = 6;
const TILE_FILL = "var(--app-fg)";
const SVG_WIDTH = 66;
const SVG_HEIGHT = 48;
const COLLAPSED_WIDTH = 48;

const ORIGINAL_RECTS = [
  { x: 24, y: 0 },
  { x: 24, y: 30 },
  { x: 0, y: 0 },
  { x: 24, y: 12 },
  { x: 24, y: 42 },
  { x: 12, y: 42 },
  { x: 12, y: 30 },
  { x: 0, y: 12 },
  { x: 36, y: 0 },
  { x: 36, y: 24 },
  { x: 12, y: 0 },
  { x: 36, y: 12 },
  { x: 36, y: 36 },
  { x: 12, y: 12 },
  { x: 24, y: 6 },
  { x: 24, y: 36 },
  { x: 18, y: 36 },
  { x: 0, y: 6 },
  { x: 24, y: 18 },
  { x: 18, y: 24 },
  { x: 0, y: 24 },
  { x: 36, y: 6 },
  { x: 36, y: 30 },
  { x: 12, y: 6 },
  { x: 36, y: 18 },
  { x: 36, y: 42 },
  { x: 12, y: 24 },
  { x: 6, y: 30 },
  { x: 0, y: 36 },
  { x: 6, y: 42 },
  { x: 30, y: 0 },
  { x: 6, y: 0 },
  { x: 30, y: 12 },
  { x: 6, y: 12 },
  { x: 42, y: 0 },
  { x: 42, y: 24 },
  { x: 18, y: 0 },
  { x: 42, y: 12 },
  { x: 42, y: 36 },
  { x: 18, y: 12 },
  { x: 30, y: 6 },
  { x: 30, y: 36 },
  { x: 6, y: 6 },
  { x: 30, y: 18 },
  { x: 30, y: 24 },
  { x: 6, y: 18 },
  { x: 42, y: 6 },
  { x: 42, y: 30 },
  { x: 18, y: 6 },
  { x: 42, y: 18 },
  { x: 42, y: 42 },
  { x: 18, y: 18 },
];

const WIP_RECTS = [
  // W
  { x: 0, y: 12 },
  { x: 0, y: 18 },
  { x: 0, y: 24 },
  { x: 0, y: 30 },
  { x: 6, y: 36 },
  { x: 12, y: 30 },
  { x: 12, y: 24 },
  { x: 18, y: 36 },
  { x: 24, y: 12 },
  { x: 24, y: 18 },
  { x: 24, y: 24 },
  { x: 24, y: 30 },
  // I
  { x: 36, y: 12 },
  { x: 36, y: 18 },
  { x: 36, y: 24 },
  { x: 36, y: 30 },
  { x: 36, y: 36 },
  // P
  { x: 48, y: 12 },
  { x: 48, y: 18 },
  { x: 48, y: 24 },
  { x: 48, y: 30 },
  { x: 48, y: 36 },
  { x: 54, y: 12 },
  { x: 54, y: 24 },
  { x: 60, y: 18 },
];

const getPosition = (index: number, isHovered: boolean) => {
  if (isHovered) {
    return index < WIP_RECTS.length ? WIP_RECTS[index] : { x: -TILE_SIZE, y: -TILE_SIZE };
  }
  return ORIGINAL_RECTS[index];
};

const PixelRearrange = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block bg-[var(--app-bg)] overflow-hidden"
      style={{
        width: isHovered ? `${SVG_WIDTH}px` : `${COLLAPSED_WIDTH}px`,
        height: `${SVG_HEIGHT}px`,
        transition: "width 0.3s ease-in-out",
      }}
    >
      <svg
        width={SVG_WIDTH}
        height={SVG_HEIGHT}
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        fill="var(--app-fg)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="var(--app-bg)" />
        {ORIGINAL_RECTS.map((_, index) => {
          const position = getPosition(index, isHovered);
          return (
            <rect
              key={index}
              x={position.x}
              y={position.y}
              width={TILE_SIZE}
              height={TILE_SIZE}
              fill={TILE_FILL}
              style={{ transition: "all 0.3s ease-in-out" }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PixelRearrange;
