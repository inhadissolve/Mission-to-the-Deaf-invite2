// src/app/invite/components/InviteSlider.jsx
"use client";
import { inviteImgs } from "@/constants/event";
import { useSlider } from "@/hooks/useSlider";

export default function InviteSlider() {
  const { idx, animating, next, prev, setSlide } = useSlider(inviteImgs.length);

  return (
    <section
      className="slider-section"
      role="region"
      aria-label="모바일 초대장 카드 슬라이드"
      data-reveal="up"
    >
      <div className="slider-title">모바일 초대장 카드</div>
      <div className="slider-container">
        <button
          className="slider-btn left"
          onClick={prev}
          aria-label="이전 카드"
          disabled={animating}
        >
          ❮
        </button>
        <img
          key={inviteImgs[idx]}
          className="slider-img fade-in"
          src={inviteImgs[idx]}
          alt={`초대장 이미지 ${idx + 1}/${inviteImgs.length}`}
          loading="eager"
          decoding="async"
          draggable="false"
        />
        <button
          className="slider-btn right"
          onClick={next}
          aria-label="다음 카드"
          disabled={animating}
        >
          ❯
        </button>
      </div>
      <div className="slider-dots" role="tablist" aria-label="슬라이드 위치">
        {inviteImgs.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === idx ? " active" : ""}`}
            onClick={() => setSlide(i)}
            role="tab"
            aria-selected={i === idx}
            aria-current={i === idx ? "true" : undefined}
            aria-label={`${inviteImgs.length}장 중 ${i + 1}번째`}
          />
        ))}
      </div>
    </section>
  );
}