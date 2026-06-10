import { Metadata } from "next";
import Pricing from "../../views/Pricing/Pricing";

export const metadata: Metadata = {
  title: "Цени за Ремонти в София | Домашен Майстор",
  description:
    "Вижте актуалните цени за ВиК, електро услуги, боядисване и монтаж на мебели в София. Прозрачни цени без скрити такси. Поискайте оферта сега!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
