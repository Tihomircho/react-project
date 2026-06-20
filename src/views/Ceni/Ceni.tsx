"use client";
import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import closeIcon from "../../assets/close-button.png";
import style from "./Ceni.module.scss";
import Image from "next/image";
import Partners from "../../Components/Partners/Partners";
import { useTranslations } from "next-intl";
interface PriceItem {
  name: string;
  price: string;
  unit: string;
}

interface PricingCategory {
  id: string;
  title: string;
  icon: string;
  items: PriceItem[];
}

const getPricingData = (
  t: ReturnType<typeof useTranslations>,
): PricingCategory[] => [
  {
    id: "painting",
    title: t("pricesCategoryPainting"),
    icon: "🎨",
    items: [
      {
        name: t("primesWallsAndCeilings"),
        price: "1.25",
        unit: "€/" + t("unit"),
      },
      {
        name: t("paintingLatexTwoCoatsWhite"),
        price: "2.50",
        unit: "€/" + t("unit"),
      },
      {
        name: t("paintingLatexTwoCoatsColor"),
        price: "4.00",
        unit: "€/" + t("unit"),
      },
      {
        name: t("spacklingWithPutty"),
        price: "7.00",
        unit: "€/" + t("unit"),
      },
      {
        name: t("windowAndDoorInstallation"),

        price: "13.00",
        unit: "€/" + t("unit2"),
      },
    ],
  },
  {
    id: "pricesCategoryElectricity",
    title: t("electricityServices"),
    icon: "⚡",
    items: [
      {
        name: t("electricityInstallation"),
        price: "4.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: t("lightingInstallation"),
        price: "8.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: "Монтаж на LED лунички (в готов отвор)",
        price: "5.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: "Подмяна на автоматичен предпазител",
        price: "10.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: "Монтаж на вентилатор за баня",
        price: "15.00",
        unit: "€/" + t("pcs"),
      },
    ],
  },
  {
    id: "plumbing",
    title: t("pricesCategoryPlumbing"),
    icon: "🚰",
    items: [
      {
        name: t("plumbingInstallation"),
        price: "20.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: t("showerCurtainInstallation"),
        price: "15.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: t("toiletInstallation"),
        price: "45.00",
        unit: "€/" + t("pcs"),
      },
      { name: t("faucetInstallation"), price: "20.00", unit: "€/" + t("pcs") },
    ],
  },
  {
    id: "assembly",
    title: t("furnitureAndInstallation"),
    icon: "🪛",
    items: [
      {
        name: t("tvStandInstallation"),
        price: "45.00",
        unit: "€/" + t("pcs"),
      },
      { name: t("wardrobeAssembly"), price: "60.00", unit: "€/" + t("pcs") },
      {
        name: t("wardrobeWithSlidingDoorsAssembly"),
        price: "120.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: t("kitchenCabinetInstallation"),
        price: "30.00",
        unit: "€/" + t("pcs"),
      },
      {
        name: t("windowSillInstallation"),
        price: "20.00",
        unit: "€/" + t("pcs"),
      },
    ],
  },
];

const Ceni: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("painting");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const t = useTranslations("Prices");
  const pricingData = getPricingData(t);
  const currentCategory = pricingData.find((cat) => cat.id === activeCategory);
  return (
    <section className={`bg-light ${style.pricingWrapper}`}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* ЗАГЛАВИЕ */}
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bolder display-6">
            {t("pricesTitle")}
          </h1>
          <p className="text-muted">{t("pricesDescription")}</p>
        </div>

        {/* НАВИГАЦИЯ / БУТОНИ КАТЕГОРИИ */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {pricingData.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`btn rounded-pill px-4 py-2 fw-bold transition ${
                  isActive ? "btn-primary text-white" : "btn-outline-primary"
                }`}
              >
                <span className="me-2">{category.icon}</span>
                {category.title}
              </button>
            );
          })}
        </div>

        {/* СПИСЪК С ЦЕНИ В КАРТА */}
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-body p-4">
            {currentCategory?.items.map((item, index) => (
              <div
                key={index}
                className={`d-flex justify-content-between align-items-center py-3 ${
                  index !== currentCategory.items.length - 1
                    ? "border-bottom"
                    : ""
                }`}
              >
                <span className="fw-semibold text-dark pe-3">{item.name}</span>
                <span className="fw-bold text-success text-nowrap">
                  {item.price} {item.unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ДОЛЕН БЛОК С БУТОН ЗА ДЕЙСТВИЕ */}
        <div className="text-center mt-5">
          <p className="small text-muted fst-italic mb-3">
            {t("noteDescription")}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-success btn-lg px-5 py-3 fw-bold shadow"
          >
            {t("ctaButton")}
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={style.cButtonWRapper}
          onClick={() => setIsModalOpen(false)}
        >
          <Image className={style.cButton} src={closeIcon} alt="Close Icon" />

          <Form locale={""} />
        </div>
      )}
      <Partners />
    </section>
  );
};

export default Ceni;
