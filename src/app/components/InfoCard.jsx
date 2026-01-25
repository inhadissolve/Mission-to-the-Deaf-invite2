// src/app/invite/components/InfoCard.jsx
import React from "react";
import { ADDRESS, ADDRESS_DETAIL } from "@/constants/event";

export default function InfoCard() {
  return (
    <div
      className="info-card"
      role="group"
      aria-label="집회 정보"
      data-reveal="zoom"
      data-delay="320ms"
    >
      {/* 날짜/시간 (2월) */}
      <div className="row">
        <div className="ico" aria-hidden>
          📅
        </div>
        <div className="row-stack">
          <div className="nb">2/5(목)·2/6(금) 오후 7:30</div>
          <div className="nb">2/7(토) 오후 7:00 · 2/8(일) 오전 11:00</div>
        </div>
      </div>

      {/* 장소 */}
      <div className="row">
        <div className="ico" aria-hidden>
          📍
        </div>
        <div className="row-stack">
          <div className="nb">{ADDRESS}</div>
          <div className="muted">{ADDRESS_DETAIL}</div>
        </div>
      </div>

      {/* 대상/인원 */}
      <div className="row">
        <div className="ico" aria-hidden>
          👥
        </div>
        <div className="row-stack">
          <div>농인/청인 성도들, 가족, 친구, 지인 등</div>
        </div>
      </div>

      {/* 연락처 */}
      <div className="row">
        <div className="ico" aria-hidden>
          ☎️
        </div>
        <div className="row-stack">
          <div className="nb">010-4448-3094 이광서 부장님</div>
          <div className="nb">010-8286-6778 하군호 목사님</div>
        </div>
      </div>
    </div>
  );
}
