"use client";

import { useState, useCallback } from "react";
import { Dithering } from "@paper-design/shaders-react";

// Custom presets with unique tweaks
const customPresets = [
  {
    name: "Pulse",
    params: {
      shape: "sphere",
      type: "8x8",
      pxSize: 3,
      scale: 1.2,
    },
  },
  {
    name: "Flow",
    params: {
      shape: "wave",
      type: "4x4",
      pxSize: 4,
      scale: 0.8,
      rotation: 15,
    },
  },
  {
    name: "Echo",
    params: {
      shape: "ripple",
      type: "8x8",
      pxSize: 2,
      scale: 1,
    },
  },
  {
    name: "Glitch",
    params: {
      shape: "warp",
      type: "random",
      pxSize: 3,
      scale: 1.2,
    },
  },
  {
    name: "Drift",
    params: {
      shape: "wave",
      type: "8x8",
      pxSize: 2,
      scale: 1.5,
      rotation: 45,
    },
  },
  {
    name: "Macro",
    params: {
      shape: "sphere",
      type: "4x4",
      pxSize: 8,
      scale: 2,
    },
  },
  {
    name: "Micro",
    params: {
      shape: "ripple",
      type: "4x4",
      pxSize: 1,
      scale: 0.6,
    },
  },
  {
    name: "Tidal",
    params: {
      shape: "wave",
      type: "2x2",
      pxSize: 3,
      scale: 1,
      rotation: -30,
    },
  },
  {
    name: "Signal",
    params: {
      shape: "ripple",
      type: "random",
      pxSize: 4,
      scale: 1.3,
    },
  },
  {
    name: "Warp",
    params: {
      shape: "warp",
      type: "8x8",
      pxSize: 2,
      scale: 0.9,
    },
  },
];

interface ShaderProps {
  className?: string;
}

export function Shader({ className }: ShaderProps) {
  const [presetIndex, setPresetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setPresetIndex((prev) => (prev + 1) % customPresets.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const currentPreset = customPresets[presetIndex];

  return (
    <Dithering
      className={className}
      {...currentPreset.params}
      colorBack="#222"
      colorFront="#fff"
      speed={0.25}
      onClick={handleClick}
      style={{
        cursor: "pointer",
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    />
  );
}
