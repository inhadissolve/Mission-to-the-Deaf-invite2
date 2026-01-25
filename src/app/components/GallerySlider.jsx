// src/app/invite/components/GallerySlider.jsx
"use client";
import { galleryImgs } from "@/constants/event";
import { useSlider } from "@/hooks/useSlider";

export default function GallerySlider() {
  const { idx, animating, next, prev, setSlide } = useSlider(
    galleryImgs.length
  );

  return (
    <section
      id="gallery"
      className="gallery-section"
      role="region"
      aria-label="이전 전도집회 사진 갤러리"
      data-reveal="up"
    >
      <div className="gallery-title">이전 전도집회 사진</div>
      <div className="gallery-container">
        <button
          className="gallery-btn left"
          onClick={prev}
          aria-label="이전 사진"
          disabled={animating}
        >
          ❮
        </button>
        <img
          key={galleryImgs[idx]}
          className="gallery-img fade-in"
          src={galleryImgs[idx]}
          alt={`집회 사진 ${idx + 1}/${galleryImgs.length}`}
          loading="lazy"
          decoding="async"
          draggable="false"
        />
        <button
          className="gallery-btn right"
          onClick={next}
          aria-label="다음 사진"
          disabled={animating}
        >
          ❯
        </button>
      </div>
      <div className="gallery-dots" role="tablist" aria-label="갤러리 위치">
        {galleryImgs.map((_, i) => (
          <button
            key={i}
            className={`gallery-dot${i === idx ? " active" : ""}`}
            onClick={() => setSlide(i)}
            role="tab"
            aria-selected={i === idx}
            aria-current={i === idx ? "true" : undefined}
            aria-label={`${galleryImgs.length}장 중 ${i + 1}번째`}
          />
        ))}
      </div>
    </section>
  );
}
