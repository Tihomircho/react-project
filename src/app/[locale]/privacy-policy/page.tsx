import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// Метаданни за SEO и сигурност

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Вземаме преводите от пространство "MetadataPrivacyPolicy" (или където се намират в JSON файла)
  const t = await getTranslations({
    locale,
    namespace: "MetadataPrivacyPolicy",
  });

  return {
    title: t("title"),
    description: t("description"),
    robots: "noindex, follow",
  };
}

const PrivacyPolicyPage = () => {
  const t = useTranslations("PrivacyPolicy");
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
        <h1 style={{ color: "#ffc107", marginBottom: "30px" }}>{t("title")}</h1>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            lineHeight: "1.6",
          }}
        >
          <p>{t("description1")}</p>

          <h2>{t("description2")}</h2>
          <p>{t("description3")}</p>

          <h2>{t("description4")}</h2>
          <p>{}</p>

          {/* Добавете останалия текст тук */}
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
