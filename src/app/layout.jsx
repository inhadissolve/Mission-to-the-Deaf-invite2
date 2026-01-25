// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AccessToolbar from "@/components/layout/AccessToolbar";

// SEO를 위한 기본 메타데이터 (페이지별로 덮어쓸 수 있음)
export const metadata = {
  title: "문해 전도집회 초대장 | 대한예수교침례회 인천교회",
  description:
    "대한예수교침례회 인천교회 농인선교부 문해 전도집회에 초대합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <AccessToolbar />
      </body>
    </html>
  );
}
