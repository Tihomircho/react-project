"use client";

import React, { ChangeEvent } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/routing";

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale(); // Взема текущия активен език (bg, en и т.н.)
  const pathname = usePathname(); // Взема текущия път без езиковия префикс
  const router = useRouter();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    // Превключва езика, като запазва текущата страница
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div style={{ display: "block", margin: "10px", textAlign: "right" }}>
      <select
        id="language-switcher"
        value={locale}
        onChange={handleLanguageChange}
        style={{
          padding: "8px 12px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#272727",
          backgroundColor: "transparent",
          border: "2px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          transition: "border-color 0.2s",
        }}
        // onFocus={(e) => (e.target.style.borderColor = "#28a745")}
        // onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      >
        <option value="bg">🇧🇬 Български (BG)</option>
        <option value="en">🇬🇧 English (EN)</option>
        <option value="el">🇬🇷 Ελληνικά (EL)</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
