"use client";
import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import closeIcon from "../../assets/close-button.png";
import style from "./Ceni.module.scss";
import Image from "next/image";
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

const pricingData: PricingCategory[] = [
  {
    id: "painting",
    title: "Боядисване & Стени",
    icon: "🎨",
    items: [
      {
        name: "Грундиране на стени и тавани",
        price: "1.25",
        unit: "€/кв.м.",
      },
      {
        name: "Боядисване с латекс (два ръце) - бяло",
        price: "2.50",
        unit: "€/кв.м.",
      },
      {
        name: "Боядисване с латекс - цветно",
        price: "4.00",
        unit: "€/кв.м.",
      },
      {
        name: "Шпакловка с шийтрок (финишно, шлайф)",
        price: "7.00",
        unit: "€/кв.м.",
      },
      {
        name: "Обръщане на прозорци и врати след PVC дограма",
        price: "13.00",
        unit: "€/л.м.",
      },
    ],
  },
  {
    id: "electricity",
    title: "Електро Услуги",
    icon: "⚡",
    items: [
      { name: "Монтаж на ключ или контакт", price: "4.00", unit: "€/бр." },
      {
        name: "Монтаж на стандартно осветително тяло / аплик",
        price: "8.00",
        unit: "€/бр.",
      },
      {
        name: "Монтаж на LED лунички (в готов отвор)",
        price: "5.00",
        unit: "€/бр.",
      },
      {
        name: "Подмяна на автоматичен предпазител",
        price: "10.00",
        unit: "€/бр.",
      },
      { name: "Монтаж на вентилатор за баня", price: "15.00", unit: "€/бр." },
    ],
  },
  {
    id: "plumbing",
    title: "ВиК Услуги",
    icon: "🚰",
    items: [
      {
        name: "Монтаж на смесител / батерия (мивка/баня)",
        price: "20.00",
        unit: "€/бр.",
      },
      { name: "Монтаж на сифон за мивка", price: "15.00", unit: "€/бр." },
      {
        name: "Монтаж на тоалетна чиния (стандартна)",
        price: "45.00",
        unit: "€/бр.",
      },
      { name: "Подмяна на спирателен кран", price: "20.00", unit: "€/бр." },
    ],
  },
  {
    id: "assembly",
    title: "Мебели & Монтажи",
    icon: "🪛",
    items: [
      {
        name: "Монтаж на стойка за телевизор (на стена)",
        price: "45.00",
        unit: "€/бр.",
      },
      { name: "Сглобяване на скрин / комод", price: "60.00", unit: "€/бр." },
      {
        name: "Сглобяване на гардероб с плъзгащи врати",
        price: "120.00",
        unit: "€/бр.",
      },
      {
        name: "Монтаж на кухненски горен шкаф",
        price: "30.00",
        unit: "€/бр.",
      },
      { name: "Монтаж на корнизи за пердета", price: "20.00", unit: "€/бр." },
    ],
  },
];

const Ceni: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("painting");

  const currentCategory = pricingData.find((cat) => cat.id === activeCategory);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <section className={`bg-light ${style.pricingWrapper}`}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* ЗАГЛАВИЕ */}
        <div className="text-center mb-5">
          <h1 className="text-primary fw-bolder display-6">
            Цени за Вътрешни Ремонти
          </h1>
          <p className="text-muted">
            Ориентировъчни цени за труд. Крайна цена се формира след оглед.
          </p>
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
            * Минимална стойност на поръчка за посещение на адрес: 20.00 €
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-success btn-lg px-5 py-3 fw-bold shadow"
          >
            Заяви оглед / Ремонт
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={style.cButtonWRapper}
          onClick={() => setIsModalOpen(false)}
        >
          <Image className={style.cButton} src={closeIcon} alt="Close Icon" />

          <Form />
        </div>
      )}
    </section>
  );
};

export default Ceni;
