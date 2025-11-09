// src/components/layout/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer data-reveal="up" data-delay="60ms">
      © {new Date().getFullYear()} 대한예수교침례회 인천교회 농인선교부. All
      rights reserved.
    </footer>
  );
}