// src/app/invite/components/QrCode.jsx
"use client";
import { useState, useEffect } from "react";

export default function QrCode() {
  const [qrData, setQrData] = useState("");
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
  const PAGE_PATH = "/invite";

  useEffect(() => {
    const targetUrl = SITE_URL ? SITE_URL + PAGE_PATH : location.href;
    import("qrcode")
      .then((QR) => QR.toDataURL(targetUrl, { margin: 2, width: 512 }))
      .then(setQrData)
      .catch(() => setQrData(""));
  }, [SITE_URL]); // SITE_URL이 변경될 때만 QR 코드 재생성

  if (!qrData) return null; // QR 코드가 생성되기 전에는 렌더링하지 않음

  return (
    <div className="qr-wrap" data-reveal="up" data-delay="80ms">
      <div className="qr-card">
        <img src={qrData} alt="초대장 QR 코드" />
        <div className="hint">위 QR을 스캔해 초대장을 공유할 수 있어요.</div>
        <a className="btn dark" href={qrData} download="invite-qr.png">
          QR 다운로드
        </a>
      </div>
    </div>
  );
}