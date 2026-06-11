import { Metadata } from "next";
import Gallery from "../../views/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Галерия и Завършени Проекти | Домашен Майстор София",
  description:
    "Разгледайте снимки от нашите завършени ремонти в София. Качествено изпълнение на ВиК, електро монтажи и сглобяване на мебели. Вижте работата ни!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function GallerysPage() {
  return <Gallery />;
}
