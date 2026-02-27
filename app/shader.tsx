"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";
import { APP_BACKGROUND } from "./constants";

interface ShaderProps {
  className?: string;
}

export function Shader({ className }: ShaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setIsVisible(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <div className={className} style={{ backgroundColor: APP_BACKGROUND }}>
      <Dithering
        className="w-full h-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 200ms ease-out",
        }}
        shape="wave"
        type="8x8"
        pxSize={2.5}
        scale={1}
        colorBack={APP_BACKGROUND}
        colorFront="#d6d6d6"
        speed={0.04}
        rotation={0}
      />
    </div>
  );
}
