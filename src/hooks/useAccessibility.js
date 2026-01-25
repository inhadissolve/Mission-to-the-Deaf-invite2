// src/hooks/useAccessibility.js
import { useState, useEffect } from "react";

const MIN_SCALE = 1;
const MAX_SCALE = 1.6;
const STEP = 0.05;
const STORAGE_KEY = "invite_font_scale";
const LEGACY_KEY = "invite_font_level";

const clamp = (value) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));
const sanitize = (value) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return MIN_SCALE;
  const rounded = Math.round(num / STEP) * STEP;
  return clamp(Number(rounded.toFixed(2)));
};

export function useAccessibility() {
  const [fontScale, setFontScale] = useState(MIN_SCALE);

  useEffect(() => {
    let scale = MIN_SCALE;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        scale = parseFloat(saved);
      } else {
        const legacy = localStorage.getItem(LEGACY_KEY);
        if (legacy) {
          const level = parseInt(legacy, 10);
          if (Number.isFinite(level)) scale = 1 + (level - 1) * STEP;
        }
      }
    } catch {}
    setFontScale(sanitize(scale));
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", String(fontScale));
    try {
      localStorage.setItem(STORAGE_KEY, String(fontScale));
    } catch {}
  }, [fontScale]);

  const increaseFont = () => setFontScale((s) => sanitize(s + STEP));
  const decreaseFont = () => setFontScale((s) => sanitize(s - STEP));
  const setScale = (value) => setFontScale(sanitize(value));

  return {
    fontScale,
    increaseFont,
    decreaseFont,
    setScale,
    MIN_SCALE,
    MAX_SCALE,
    STEP,
  };
}
