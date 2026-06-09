import { Metadata } from "next";
import Home from "../views/Home/Home";

// 1. Google чете това директно от сървъра (Перфектно за SEO)
export const metadata: Metadata = {
  title: "Домашен Майстор София | Ремонти и ВиК Услуги",
  description:
    "Професионални услуги от домашен майстор в София. Бързо реагиране за аварии, монтаж на мебели и ремонти.",
};

// 2. Това е съдържанието, което ще се появи между менюто и футера
export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
