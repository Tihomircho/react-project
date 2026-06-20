import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Home from "../../views/Home/Home";

type Props = {
  params: Promise<{ locale: string }>;
};

// 1. Динамични метаданни за Google (SEO) според избрания език
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // 'Metadata' трябва да съществува като ключ във вашите JSON файлове (напр. bg.json и en.json)
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
  };
}

// 2. Основната страница, която предава езика надолу
export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      {/* Подаваме locale на вашия изглед, за да знае кой език да рендерира */}
      <Home locale={locale} />
    </main>
  );
}
