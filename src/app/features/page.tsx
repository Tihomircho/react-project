import { Metadata } from "next";
import Features from "../../views/Features/Features";

export const metadata: Metadata = {
  title: "Галерия и Завършени Проекти | Домашен Майстор София",
  description:
    "Разгледайте снимки от нашите завършени ремонти в София. Качествено изпълнение на ВиК, електро монтажи и сглобяване на мебели. Вижте работата ни!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function FeaturesPage() {
  return <Features />;
}
