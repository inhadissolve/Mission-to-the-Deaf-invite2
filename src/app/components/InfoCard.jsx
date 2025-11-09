// src/app/invite/components/InfoCard.jsx
import React from "react";

export default function InfoCard() {
  return (
    <div
      className="info-card"
      role="group"
      aria-label="집회 정보"
      data-reveal="zoom"
      data-delay="320ms"
    >
      {/* 날짜/시간 (11월) */}
      <div className="row">
        <div className="ico" aria-hidden>
          📅
        </div>
        <div className="nb">2025년 11월 22일(토) 오후 3:00</div>
      </div>
      <div className="row" style={{ marginTop: 0 }}>
        <div style={{ width: 20 }} aria-hidden />
        <div className="nb">23일(일) 오전 10:00</div>
      </div>

      {/* 장소 */}
      <div className="row">
        <div className="ico" aria-hidden>
          📍
        </div>
        <div>
          인천 미추홀구 매소홀로418번길 34
          <br />
          (인천교회 교육원 3층)
        </div>
      </div>

      {/* 연락처 */}
      <div className="row">
        <div className="ico" aria-hidden>
          ☎️
        </div>
        <div className="nb">(영상) 010-8286-6778 하군호</div>
      </div>
      <div className="row" style={{ marginTop: 0 }}>
        <div style={{ width: 20 }} aria-hidden />
        <div className="nb">(음성) 010-4342-5634 송용태</div>
      </div>
    </div>
  );
}