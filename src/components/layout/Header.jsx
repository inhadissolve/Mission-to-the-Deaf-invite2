// src/components/layout/Header.jsx
"use client";
import React from "react";
import { ADDRESS, ADDRESS_DETAIL } from "@/constants/event";

export default function Header() {
  const fullAddress = `${ADDRESS} ${ADDRESS_DETAIL}`;
  const KAKAO_MAP_SHARE_LINK =
    process.env.NEXT_PUBLIC_KAKAO_MAP_SHARE_LINK ||
    `https://map.kakao.com/link/search/${encodeURIComponent(fullAddress)}`;

  const handleScrollToGallery = () => {
    document
      .getElementById("gallery")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header" data-reveal="down">
      <div className="brand">
        <img
          src="/images/logo_dove.png"
          alt="교회 로고"
          loading="eager"
          decoding="sync"
          width="44"
          height="44"
        />
        <div className="title">
          대한예수교침례회 인천교회
          <span>농인선교부 문해 전도집회</span>
        </div>
      </div>
      <div className="btns">
        <a
          className="btn kmap"
          href={KAKAO_MAP_SHARE_LINK}
          target="_blank"
          rel="noreferrer"
          title="카카오맵으로 길찾기"
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
        <button className="btn accent" onClick={handleScrollToGallery}>
          사진 보기
        </button>
      </div>
    </header>
  );
}
