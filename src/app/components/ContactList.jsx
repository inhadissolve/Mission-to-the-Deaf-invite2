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
            <span className="contact-type">자매님</span>
            <span className="contact-name">곽보경</span>
          </div>
          <div className="contact-right">
            <a
              className="contact-link"
              href="tel:01044483094"
              aria-label="곽보경 자매님에게 전화"
            >
              010-4448-3094
            </a>
            <div className="emoji-box" aria-hidden>
              📞
            </div>
            <div className="contact-photo">
              <img src={VOICE_PHOTO} alt="곽보경 자매님 사진" />
            </div>
          </div>
        </div>

        <div
          className="contact-card video"
          data-reveal="right"
          data-delay="80ms"
        >
          <div className="contact-left">
            <span className="contact-type">목사님</span>
            <span className="contact-name">하군호</span>
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
              🙏
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
