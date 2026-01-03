"use client";

import { Dithering } from "@paper-design/shaders-react";

interface ShaderProps {
  className?: string;
}

export function Shader({ className }: ShaderProps) {
  return (
    <Dithering
      className={className}
      shape="sphere"
      type="8x8"
      pxSize={2}
      scale={1.4}
      colorBack="#222"
      colorFront="#fff"
      speed={0.15}
      rotation={0}
    />
  );
}
