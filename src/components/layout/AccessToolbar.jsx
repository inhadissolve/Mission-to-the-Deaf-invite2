// src/components/layout/AccessToolbar.jsx
"use client";
import { useAccessibility } from "@/hooks/useAccessibility";

export default function AccessToolbar() {
  const { fontLevel, increaseFont, decreaseFont, MAX_LEVEL } =
    useAccessibility();

  return (
    <div className="access-toolbar" role="group" aria-label="글자 크기 조절">
      <button
        className="btn-round"
        onClick={decreaseFont}
        aria-label="글자 작게"
        disabled={fontLevel === 1}
      >
        A-
      </button>
      <div className="level" aria-live="polite">
        {fontLevel} / {MAX_LEVEL}
      </div>
      <button
        className="btn-round"
        onClick={increaseFont}
        aria-label="글자 크게"
        disabled={fontLevel === MAX_LEVEL}
      >
        A+
      </button>
    </div>
  );
}