// src/hooks/useSlider.js
import { useState, useCallback } from "react";

const ANIM_MS = 280; // 애니메이션 시간

export function useSlider(imageCount) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setIdx((i) => (i + 1) % imageCount);
    setTimeout(() => setAnimating(false), ANIM_MS);
  }, [animating, imageCount]);

  const prev = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setIdx((i) => (i - 1 + imageCount) % imageCount);
    setTimeout(() => setAnimating(false), ANIM_MS);
  }, [animating, imageCount]);

  const setSlide = useCallback(
    (index) => {
      if (animating || index === idx) return;
      setAnimating(true);
      setIdx(index);
      setTimeout(() => setAnimating(false), ANIM_MS);
    },
    [animating, idx]
  );

  return { idx, animating, next, prev, setSlide };
}