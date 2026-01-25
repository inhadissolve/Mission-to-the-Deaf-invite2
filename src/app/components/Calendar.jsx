// src/app/invite/components/Calendar.jsx
"use client";
import { useMemo } from "react";
import { SESSIONS } from "@/constants/event";

export default function Calendar() {
  const calendarCells = useMemo(() => {
    const year = 2026;
    const month0 = 1; // 2월 (0-based index)

    const first = new Date(year, month0, 1);
    const firstDow = first.getDay();
    const daysInMonth = new Date(year, month0 + 1, 0).getDate();

    const today = new Date();
    const isCurrentMonth =
      today.getFullYear() === year && today.getMonth() === month0;
    const pastUntil = isCurrentMonth ? today.getDate() : 0;

    const eventSet = new Set(SESSIONS.map((s) => s.d));

    const cells = [];
    for (let i = 0; i < firstDow; i++) cells.push({ inMonth: false });
    for (let d = 1; d <= daysInMonth; d++) {
      const isEvent = eventSet.has(d);
      const isPast = pastUntil > 0 && d <= pastUntil;
      const aria =
        (isEvent ? `2월 ${d}일, 집회` : `2월 ${d}일`) +
        (isPast ? ", 오늘 이전" : "");
      cells.push({ inMonth: true, day: d, isEvent, isPast, aria });
    }
    while (cells.length % 7 !== 0) cells.push({ inMonth: false });
    return cells;
  }, []); // SESSIONS는 상수이므로 의존성 배열에서 제거 가능

  return (
    <section className="calendar-card" data-reveal="up">
      <h3>2026년 2월 달력</h3>

      <div className="month-cal" role="region" aria-label="2026년 2월 달력">
        <div className="cal-header">
          <div className="title">한눈에 보는 일정</div>
          <div className="legend">
            <span className="pill event" aria-hidden /> 집회가 있는 날
            <span style={{ width: 10 }} />
            <span className="pill past" aria-hidden /> 오늘 이전
          </div>
        </div>

        <div className="cal-dow" aria-hidden="true">
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>

        <div className="cal-grid" role="grid" aria-label="2월 달력 그리드">
          {calendarCells.map((c, i) => (
            <div
              key={i}
              role="gridcell"
              aria-selected={c.isEvent || undefined}
              aria-label={c?.aria || ""}
              className={`cell ${c.inMonth ? "" : "other"} ${
                c.isEvent ? "event" : ""
              } ${c.isPast ? "past" : ""}`}
            >
              {c.inMonth && <div className="date-n">{c.day}</div>}
            </div>
          ))}
        </div>

        {/* SESSIONS가 변경되어 자동으로 일정이 표시됩니다. */}
        <div className="cal-times" aria-label="집회 시간 안내">
          {SESSIONS.map((s) => (
            <span className="cal-tag" key={s.d}>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
