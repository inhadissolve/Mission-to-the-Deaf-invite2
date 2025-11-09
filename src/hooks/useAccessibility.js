// src/hooks/useAccessibility.js
import { useState, useEffect } from "react";

const LEVELS = [18, 20, 22, 24]; // 4단계 레벨
const MAX_LEVEL = 3; // 1 ~ 3단계만 사용

export function useAccessibility() {
  const [fontLevel, setFontLevel] = useState(1);

  useEffect(() => {
    try {
      const s = localStorage.getItem("invite_font_level");
      if (s) setFontLevel(Math.min(MAX_LEVEL, Math.max(1, parseInt(s, 10))));
    } catch {}
  }, []);

  useEffect(() => {
    const px = LEVELS[fontLevel - 1] || 18;
    document.documentElement.style.setProperty("--base-font", `${px}px`);
    try {
      localStorage.setItem("invite_font_level", String(fontLevel));
    } catch {}
  }, [fontLevel]);

  const increaseFont = () => setFontLevel((l) => Math.min(MAX_LEVEL, l + 1));
  const decreaseFont = () => setFontLevel((l) => Math.max(1, l - 1));

  return { fontLevel, increaseFont, decreaseFont, MAX_LEVEL };
}