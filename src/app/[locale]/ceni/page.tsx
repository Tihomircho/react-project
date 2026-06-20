import { Metadata } from "next";
import Ceni from "../../../views/Ceni/Ceni";
import { getTranslations } from "next-intl/server";
type Props = {
  params: Promise<{ locale: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "MetadataPrices" });

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function CeniPage() {
  return <Ceni />;
}
