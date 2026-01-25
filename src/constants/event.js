// src/constants/event.js

/** D-Day 기준일 (2026년 2월 5일 오후 7시 30분) */
export const FIRST_EVENT_ISO = "2026-02-05T19:30:00+09:00";

/** 주소 */
export const ADDRESS =
  process.env.NEXT_PUBLIC_ADDRESS || "인천 미추홀구 매소홀로418번길 34";
export const ADDRESS_DETAIL =
  process.env.NEXT_PUBLIC_ADDRESS_DETAIL || "인천교회 교육원 3층";

/** 집회 일정 (2월) */
export const SESSIONS = [
  { d: 5, label: "2/5(목) 오후 7:30" },
  { d: 6, label: "2/6(금) 오후 7:30" },
  { d: 7, label: "2/7(토) 오후 7:00" },
  { d: 8, label: "2/8(일) 오전 11:00" },
];

/** 연락처 사진 */
export const VOICE_PHOTO = "/images/voice-photo.jpg";
export const VIDEO_PHOTO = "/images/video-photo.jpg";

/** 초대장 이미지 목록 */
export const inviteImgs = [
  "/images/초대1.jpg",
  "/images/초대2.jpg",
  "/images/초대3.jpg",
  "/images/초대4.jpg",
  "/images/초대5.jpg",
  "/images/초대6.jpg",
  "/images/초대7.jpg",
];

/** 갤러리 이미지 목록 */
export const galleryImgs = [
  "/images/2024_01.jpg",
  "/images/2024_02.jpg",
  "/images/2024_03.jpg",
  "/images/2024_04.jpg",
];

/** 카카오 공유 정보 (2월) */
export const KAKAO_SHARE_INFO = {
  TITLE: "농인선교부 문해 전도집회 초대장",
  DESC: "일정: 2/5(목)~8(일)\n장소: 인천교회 교육원 3층",
  IMAGE_URL: "/images/kakao-cover-800x800.jpg",
};
