import React from "react";
import { Metadata } from "next";

// Метаданни за SEO и сигурност
export const metadata: Metadata = {
  title: "Политика за поверителност | Ремонти София",
  description:
    "Политика за защита на личните данни на потребителите на сайта Ремонти София.",
  robots: "noindex, follow", // Казва на Google да не я класира в търсачката, но да следва линковете
};

const PrivacyPolicyPage = () => {
  return (
    <main
      style={{
        backgroundColor: "#212529",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container py-5" style={{ maxWidth: "800px" }}>
        <h1 style={{ color: "#ffc107", marginBottom: "30px" }}>
          Политика за поверителност
        </h1>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            lineHeight: "1.6",
          }}
        >
          <p>Последна промяна: юни 2026 г.</p>

          <h2>1. Какви данни събираме</h2>
          <p>
            Чрез нашата контактна форма събираме Вашето име, имейл адрес,
            описание на нужния ремонт и прикачени снимки на обекта.
          </p>

          <h2>2. Цел на обработката</h2>
          <p>
            Данните се използват единствено за изготвяне на ценова оферта и
            организиране на огледи за строително-монтажни дейности на
            територията на град София.
          </p>

          {/* Добавете останалия текст тук */}
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
