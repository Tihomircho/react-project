import { Metadata } from "next";
import Features from "../../views/Features/Features";

export const metadata: Metadata = {
  title: "Ремонтни Услуги и Описание | Домашен Майстор",
  description:
    "Вижте какви услуги предлагаме - от монтаж на мебели до електро услуги.",
};

export default function FeaturesPage() {
  return <Features />;
}
