import { Metadata } from "next";
import Gallery from "../../../views/Gallery/Gallery";
import { getTranslations } from "next-intl/server";
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // 'Metadata' трябва да съществува като ключ във вашите JSON файлове (напр. bg.json и en.json)
  const t = await getTranslations({ locale, namespace: "MetadataGallery" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function GallerysPage() {
  return <Gallery />;
}
