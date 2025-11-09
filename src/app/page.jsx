// src/app/page.jsx
"use client";

import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import "./invite.css"; // 초대장 전용 CSS

// 로직 훅
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { initKakao } from "@/lib/kakao";

// 컴포넌트
import Dday from "./components/Dday";
import Hero from "./components/Hero";
import InviteSlider from "./components/InviteSlider";
import GallerySlider from "./components/GallerySlider";
import Map from "./components/Map";
import Calendar from "./components/Calendar";
import ContactList from "./components/ContactList";
import KakaoShare from "./components/KakaoShare";
import QrCode from "./components/QrCode";

// 상수
import { inviteImgs, galleryImgs } from "@/constants/event";

export default function InvitePage() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const KAKAO_APP_KEY =
    process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "dd5389e207535b56dbceb451afa5b1c3";
  const PAGE_PATH = "/"; // 이제 홈페이지이므로 "/" 입니다.
  const ogImage = `${SITE_URL}/images/book-banner.jpg`;

  // 스크롤 애니메이션 훅 실행
  useScrollReveal();

  // 이미지 사전 로드
  useEffect(() => {
    const all = [...inviteImgs, ...galleryImgs];
    const preload = () =>
      all.forEach((src) => {
        const i = new Image();
        i.decoding = "async";
        i.src = src;
      });

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preload);
    } else {
      setTimeout(preload, 200);
    }
  }, []);

  return (
    <>
      {/* 11월 비문해 집회용 Head */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>비문해 전도집회 | 대한예수교침례회 인천교회</title>
        <meta
          name="description"
          content="대한예수교침례회 인천교회 농선부 비문해 숙박 전도집회(11/22~23)에 초대합니다."
        />
        {SITE_URL && <link rel="canonical" href={SITE_URL + PAGE_PATH} />}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="비문해 전도집회 | 대한예수교침례회 인천교회"
        />
        <meta
          property="og:description"
          content="일정: 11/22(토)~23(일) | 장소: 인천교회 교육원 3층"
        />
        <meta property="og:image" content={ogImage} />
        {SITE_URL && <meta property="og:url" content={SITE_URL + PAGE_PATH} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#174397" />
        {[...inviteImgs.slice(0, 2), ...galleryImgs.slice(0, 2)].map((u) => (
          <link key={u} rel="preload" as="image" href={u} />
        ))}
      </Head>

      {/* Kakao SDK (onLoad로 안전하게 초기화) */}
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="afterInteractive"
        onLoad={() => initKakao(KAKAO_APP_KEY)}
      />

      {/* --- 페이지 컴포넌트 조립 --- */}
      <Dday />
      <Hero />

      <div className="brand-under-book" data-reveal="up" data-delay="60ms">
        <img src="/images/logo_dove.png" alt="생명의말씀선교회 로고" />
        <span>생명의말씀선교회</span>
      </div>

      <InviteSlider />
      <GallerySlider />
      <Map />
      <Calendar />
      <ContactList />
      <KakaoShare />
      <QrCode />
    </>
  );
}