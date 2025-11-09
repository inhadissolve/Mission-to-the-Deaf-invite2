// src/constants/event.js

/** D-Day 기준일 (11월 22일 오후 3시) */
export const FIRST_EVENT_ISO = "2025-11-22T15:00:00+09:00";

/** 주소 */
export const ADDRESS =
  process.env.NEXT_PUBLIC_ADDRESS || "인천 미추홀구 매소홀로418번길 34";

/** 집회 일정 (11월) */
export const SESSIONS = [
  { d: 22, label: "22(토) 오후 3:00" },
  { d: 23, label: "23(일) 오전 10:00" },
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

/** 카카오 공유 정보 (11월) */
export const KAKAO_SHARE_INFO = {
  TITLE: "비문해 전도집회 초대장",
  DESC: "일정: 11/22(토)~23(일)\n장소: 인천교회 교육원 3층",
  IMAGE_URL: "/images/kakao-cover-800x800.jpg",
};