"use client";

import React, { useState } from "react";

const PixelRearrange = () => {
  const [isHovered, setIsHovered] = useState(false);

  const originalRects = [
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

  const wipRects = [
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

  const getPosition = (index: number) => {
    if (isHovered) {
      return index < wipRects.length ? wipRects[index] : { x: -6, y: -6 };
    }
    return originalRects[index];
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block bg-zinc-100 overflow-hidden"
      style={{
        width: isHovered ? "66px" : "48px",
        height: "48px",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <svg
        width="66"
        height="48"
        viewBox="0 0 66 48"
        fill="#f4f4f5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="66" height="48" fill="240 4.8% 95.9%" />
        {originalRects.map((_, index) => {
          const position = getPosition(index);
          return (
            <rect
              key={index}
              x={position.x}
              y={position.y}
              width="6"
              height="6"
              fill="black"
              style={{ transition: "all 0.3s ease-in-out" }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default PixelRearrange;
