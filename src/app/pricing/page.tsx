import { Metadata } from "next";
import Pricing from "../../views/Pricing/Pricing";

export const metadata: Metadata = {
  title: "Цени за Ремонти в София | Домашен Майстор",
  description:
    "Прозрачни цени за домашни ремонти, ВиК услуги и монтажи. Поискайте оферта.",
};

export default function PricingPage() {
  return <Pricing />;
}
