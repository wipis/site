"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis, { type LenisOptions } from "lenis";

const LenisContext = createContext<Lenis | null | undefined>(undefined);

interface LenisProviderProps {
  children: ReactNode;
  options?: LenisOptions;
}

function getDefaultOptions(): LenisOptions {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    autoRaf: true,
    duration: prefersReducedMotion ? 0 : 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !prefersReducedMotion,
    touchMultiplier: 1.5,
    syncTouch: false,
    anchors: true,
    infinite: false,
  };
}

export function LenisProvider({ children, options = {} }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const optionsRef = useRef<LenisOptions>(options);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  useEffect(() => {
    const lenisInstance = new Lenis({
      ...getDefaultOptions(),
      ...optionsRef.current,
    });

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  const context = useContext(LenisContext);

  if (context === undefined) {
    throw new Error("useLenis must be used within a LenisProvider");
  }

  return context;
}
