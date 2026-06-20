"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("CookieConsent");
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    // Тук в бъдеще можете да блокирате Google Analytics/Facebook Pixel, ако ги добавите
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        backgroundColor: "#1a1d20",
        color: "#fff",
        padding: "15px 25px",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        zIndex: 9999,
        border: "1px solid #495057",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: "1.5",
          flex: "1 1 300px",
        }}
      >
        {t("message")}
        <Link
          href="/privacy-policy"
          style={{ color: "#ffc107", textDecoration: "underline" }}
        >
          {t("linkText")}
        </Link>
        .
      </p>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {/* Бутон за отказ (по-дискретен, сив) */}
        <button
          onClick={handleDecline}
          style={{
            backgroundColor: "transparent",
            color: "#adb5bd",
            border: "1px solid #495057",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "#6c757d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#adb5bd";
            e.currentTarget.style.borderColor = "#495057";
          }}
        >
          {t("declineButton")}
        </button>

        {/* Бутон за приемане (основен, жълт) */}
        <button
          onClick={handleAccept}
          style={{
            backgroundColor: "#ffc107",
            color: "#212529",
            border: "none",
            padding: "8px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e0a800")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffc107")
          }
        >
          {t("acceptButton")}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
