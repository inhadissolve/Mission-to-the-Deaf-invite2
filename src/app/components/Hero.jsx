// src/app/invite/components/Hero.jsx
import InfoCard from "./InfoCard";

export default function Hero() {
  return (
    <section className="hero" role="region" aria-label="전도집회 초대 배너">
      <div className="hero__inner">
        <div className="hero__dept" data-reveal="up" data-delay="60ms">
          대한예수교침례회 인천교회 농인선교부
        </div>
        <div className="hero__greet" data-reveal="up" data-delay="120ms">
          주님의 이름으로 여러분을 초대합니다.
        </div>

        <h1 className="hero__title" data-reveal="up" data-delay="180ms">
          2025 비문해 <span className="nowrap">전도집회</span>
        </h1>

        <div className="hero__verse" data-reveal="up" data-delay="240ms">
          너희는 귀를 기울이고 내게 나아와 들으라
          <br />
          그리하면 너희 영혼이 살리라
          <small>이사야 56:3</small>
        </div>

        {/* 정보 카드를 Hero의 자식으로 렌더링 */}
        <InfoCard />
      </div>
    </section>
  );
}