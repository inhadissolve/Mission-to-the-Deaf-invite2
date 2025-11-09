// src/app/invite/components/ContactList.jsx
import { VOICE_PHOTO, VIDEO_PHOTO } from "@/constants/event";

export default function ContactList() {
  return (
    <>
      <div className="section-title" data-reveal="up">
        문의하기
      </div>
      <div className="contact-list">
        <div className="contact-card voice" data-reveal="left">
          <div className="contact-left">
            <span className="contact-type">음성</span>
            <span className="contact-name">송용태 부장</span>
          </div>
          <div className="contact-right">
            <a
              className="contact-link"
              href="tel:01043425634"
              aria-label="송용태 부장님에게 전화"
            >
              010-4342-5634
            </a>
            <div className="emoji-box" aria-hidden>
              🗣️
            </div>
            <div className="contact-photo">
              <img src={VOICE_PHOTO} alt="송용태 부장님 사진" />
            </div>
          </div>
        </div>

        <div
          className="contact-card video"
          data-reveal="right"
          data-delay="80ms"
        >
          <div className="contact-left">
            <span className="contact-type">영상</span>
            <span className="contact-name">하군호 목사</span>
          </div>
          <div className="contact-right">
            <a
              className="contact-link"
              href="tel:01082866778"
              aria-label="하군호 목사님에게 전화"
            >
              010-8286-6778
            </a>
            <div className="emoji-box" aria-hidden>
              🤟
            </div>
            <div className="contact-photo">
              <img src={VIDEO_PHOTO} alt="하군호 목사님 사진" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}