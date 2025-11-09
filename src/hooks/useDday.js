// src/hooks/useDday.js
import { useMemo } from "react";
import { FIRST_EVENT_ISO } from "@/constants/event";

export function useDday() {
  const dLeft = useMemo(() => {
    const MS_PER_DAY = 86400000;
    const event = new Date(FIRST_EVENT_ISO);
    const today = new Date();

    // D-Day 계산은 날짜(0시) 기준으로 변경
    event.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diff = event.getTime() - today.getTime();
    return Math.max(0, Math.floor(diff / MS_PER_DAY));
  }, []); // 의존성 배열에서 FIRST_EVENT_ISO 제거 (상수이므로)

  return dLeft;
}