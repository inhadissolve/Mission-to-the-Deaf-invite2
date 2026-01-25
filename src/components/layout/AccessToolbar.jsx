// src/components/layout/AccessToolbar.jsx
"use client";
import { useAccessibility } from "@/hooks/useAccessibility";

export default function AccessToolbar() {
  const {
    fontScale,
    increaseFont,
    decreaseFont,
    setScale,
    MIN_SCALE,
    MAX_SCALE,
    STEP,
  } = useAccessibility();
  const percent = Math.round(fontScale * 100);

  return (
    <div className="access-toolbar" role="group" aria-label="글씨 크기 조절">
      <div className="access-row">
        <button
          className="btn-round"
          onClick={decreaseFont}
          aria-label="글씨 작게"
          disabled={fontScale <= MIN_SCALE + 0.001}
        >
          A-
        </button>
        <div className="level" aria-live="polite">
          {percent}%
        </div>
        <button
          className="btn-round"
          onClick={increaseFont}
          aria-label="글씨 크게"
          disabled={fontScale >= MAX_SCALE - 0.001}
        >
          A+
        </button>
      </div>
      <div className="access-row range">
        <input
          className="font-range"
          type="range"
          min={MIN_SCALE}
          max={MAX_SCALE}
          step={STEP}
          value={fontScale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
          aria-label="글씨 크기"
        />
      </div>
    </div>
  );
}
