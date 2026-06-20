"use client";

import React, { ChangeEvent } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/routing";
import style from "./LanguageSwitcher.module.scss";
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
        className={style.languageSwitcher}

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
