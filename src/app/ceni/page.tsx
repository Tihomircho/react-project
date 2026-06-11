import { Metadata } from "next";
import Ceni from "../../views/Ceni/Ceni";

export const metadata: Metadata = {
  title: "Цени за Ремонти в София | Домашен Майстор",
  description:
    "Вижте актуалните цени за ВиК, електро услуги, боядисване и монтаж на мебели в София. Прозрачни цени без скрити такси. Поискайте оферта сега!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function CeniPage() {
  return <Ceni />;
}
