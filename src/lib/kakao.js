// src/lib/kakao.js
import { KAKAO_SHARE_INFO } from "@/constants/event";

/**
 * 카카오 SDK를 초기화합니다.
 */
export function initKakao(key) {
  if (
    typeof window !== "undefined" &&
    window.Kakao &&
    !window.Kakao.isInitialized()
  ) {
    window.Kakao.init(key);
    return true;
  }
  return false;
}

/**
 * 카카오톡 공유하기 기능을 실행합니다.
 */
export function shareKakao() {
  if (typeof window === "undefined" || !window.Kakao) {
    alert("카카오 SDK를 불러오는 중입니다...");
    return;
  }
  if (!window.Kakao.isInitialized()) {
    alert("카카오 SDK가 정상적으로 초기화되지 않았습니다.");
    return;
  }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const PAGE_PATH = process.env.NEXT_PUBLIC_SITE_PATH || "/";
  const normalizedPath = PAGE_PATH.startsWith("/") ? PAGE_PATH : `/${PAGE_PATH}`;
  const baseOrigin = SITE_URL ? SITE_URL.replace(/\/+$/, "") : "";
  const shareUrl = baseOrigin ? `${baseOrigin}${normalizedPath}` : "";
  if (!shareUrl) {
    alert("공유 주소가 설정되지 않았습니다. NEXT_PUBLIC_SITE_URL을 설정하세요.");
    return;
  }
  const { TITLE, DESC, IMAGE_URL } = KAKAO_SHARE_INFO;

  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: TITLE,
      description: DESC,
      imageUrl: `${baseOrigin}${IMAGE_URL.startsWith("/") ? "" : "/"}${IMAGE_URL}?v=2026-02-01`, // 캐시 방지
      link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
    },
    buttons: [
      { title: "초대장 보기", link: { mobileWebUrl: shareUrl, webUrl: shareUrl } },
    ],
  });
}
