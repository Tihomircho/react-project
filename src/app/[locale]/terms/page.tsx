import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Вземаме преводите от пространство "MetadataTerms" (или където се намират в JSON файла)
  const t = await getTranslations({ locale, namespace: "MetadataTerms" });

  return {
    title: t("title"),
    description: t("description"),
    robots: "noindex, follow",
  };
}

const TermsPage = () => {
  const t = useTranslations("Terms");

  return (
    <main
      style={{
        backgroundColor: "#212529",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
      }}
    >
      <div
        className="container py-5"
        style={{ maxWidth: "800px", fontFamily: "sans-serif" }}
      >
        <h1 style={{ color: "#ffc107", marginBottom: "30px" }}>{t("title")}</h1>

        <p style={{ color: "#adb5bd", marginBottom: "30px" }}>
          {t("description1")}
        </p>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            lineHeight: "1.6",
          }}
        >
          <div>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {t("description2")}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: t.raw("description3") }} />
          </div>

          <div>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {t("description4")}
            </h2>
            <p>{t("description5")}</p>
            <p
              style={{
                marginTop: "10px",
                borderLeft: "3px solid #ffc107",
                paddingLeft: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: t.raw("description6") }}
            ></p>
          </div>

          <div>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {t("description7")}
            </h2>
            <p>{t("description8")}</p>
          </div>

          <div>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {t("description9")}
            </h2>
            <p>{t("description10")}</p>
          </div>

          <div>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {t("description11")}
            </h2>
            <p>{t("description12")}</p>
          </div>

          <div>
            <h2
              style={{
                color: "#ffc107",
                fontSize: "1.5rem",
                marginBottom: "10px",
              }}
            >
              {t("description13")}
            </h2>
            <p>{t("description14")}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsPage;
