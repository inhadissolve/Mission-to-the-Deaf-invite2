// src/app/invite/components/Hero.jsx
import InfoCard from "./InfoCard";

export default function Hero() {
  return (
    <section className="hero" role="region" aria-label="문해 전도집회 초대 배너">
      <div className="hero__inner">

        <div className="hero__badge" data-reveal="up" data-delay="300ms">
          2026.02.05(목) - 02.08(일)
        </div>

        <h1 className="hero__title" data-reveal="up" data-delay="200ms">
          농인선교부 <span className="nowrap">전도집회</span>
        </h1>

        <div className="hero__verse" data-reveal="up" data-delay="260ms">
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
