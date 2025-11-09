// src/app/invite/components/KakaoShare.jsx
"use client";
import { shareKakao } from "@/lib/kakao";

export default function KakaoShare() {
  return (
    <div className="kakao-btn-wrap" data-reveal="up">
      <button className="kakao-share-btn" onClick={shareKakao}>
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt=""
          aria-hidden="true"
        />
        카카오톡으로 공유하기
      </button>
    </div>
  );
}