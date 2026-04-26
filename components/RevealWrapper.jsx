"use client";
import { useReveal } from "@/hooks/useReveal";

export default function RevealWrapper({ children }) {
  const ref = useReveal();
  return <div ref={ref}>{children}</div>;
}
