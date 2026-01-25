// src/app/invite/components/Dday.jsx
"use client";
import { useDday } from "@/hooks/useDday";

export default function Dday() {
  const dLeft = useDday();

  return (
    <div
      className="d-day"
      aria-live="off"
      data-reveal="up"
      data-delay="60ms"
    >
    전도집회까지 <span className="num">D-{dLeft}</span>
    </div>
  );
}
