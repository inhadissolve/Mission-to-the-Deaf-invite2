// src/app/components/Map.jsx
"use client";
import { useMemo } from "react";
import { ADDRESS, ADDRESS_DETAIL } from "@/constants/event"; // 주소 상수를 가져옵니다.

export default function Map() {
  const fullAddress = `${ADDRESS} ${ADDRESS_DETAIL}`;
  const KAKAO_MAP_SHARE_LINK =
    process.env.NEXT_PUBLIC_KAKAO_MAP_SHARE_LINK ||
    `https://map.kakao.com/link/search/${encodeURIComponent(fullAddress)}`;
  const NAVER_MAP_SHARE_LINK =
    process.env.NEXT_PUBLIC_NAVER_MAP_SHARE_LINK ||
    `https://map.naver.com/v5/search/${encodeURIComponent(fullAddress)}`;

  // [수정] 표준 Google Maps Embed URL로 변경
  // q=${encodeURIComponent(ADDRESS)} -> 주소를 쿼리로 지정
  // &z=17 -> 확대 레벨을 17로 지정 (숫자가 클수록 확대)
  // &output=embed -> embed 모드로 출력
  const GMAPS_EMBED = useMemo(
    () =>
      `https://maps.google.com/maps?q=${encodeURIComponent(
        fullAddress
      )}&hl=ko&z=17&output=embed`,
    [fullAddress]
  );

  return (
    <>
      <div className="section-title" data-reveal="up">
        오시는 길
      </div>
      <div className="map-wrap" data-reveal="zoom" data-delay="80ms">
        <iframe
          className="map-frame"
          src={GMAPS_EMBED}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="오시는 길"
        />
      </div>
      <div className="map-meta" data-reveal="up" data-delay="140ms">
        <div className="map-address">
          <span className="label">주소</span>
          <strong>{ADDRESS}</strong>
          <span className="detail">{ADDRESS_DETAIL}</span>
        </div>
        <div className="map-actions">
          <a
            href={KAKAO_MAP_SHARE_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn kmap"
          >
            <svg
              className="kakao-map-icon"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C5.174 0 2.188 3.018 2.188 6.885C2.188 8.648 2.802 10.21 3.905 11.666L8.52 17.728C8.653 17.9 8.822 18 9 18C9.178 18 9.347 17.9 9.48 17.728L14.095 11.666C15.198 10.21 15.812 8.648 15.812 6.885C15.812 3.018 12.826 0 9 0ZM9 10.125C7.29 10.125 5.906 8.729 5.906 7C5.906 5.271 7.29 3.875 9 3.875C10.71 3.875 12.094 5.271 12.094 7C12.094 8.729 10.71 10.125 9 10.125Z"
                fill="#FAE100"
              />
            </svg>
            카카오맵
          </a>
          <a
            href={NAVER_MAP_SHARE_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn nmap"
          >
            <span className="naver-badge" aria-hidden>
              N
            </span>
            네이버지도
          </a>
        </div>
      </div>
    </>
  );
}
