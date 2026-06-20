"use client";
import React from "react";
import furniture1 from "./../../assets/furniture1.jpg";
import electricity1 from "./../../assets/electricity1.jpg";
import plumbing from "./../../assets/plumbing-repair-service.jpg";
import { useTranslations } from "next-intl";

interface Service {
  id: number;
  title: string;
  image: string;
  desc: string; // Вече ще пази само ключа като стринг, напр. "service1.desc"
  price: string;
}
interface ServicesProps {
  onScrollToForm: () => void;
  locale: string;
}

const Services: React.FC<ServicesProps> = ({ onScrollToForm }) => {
  const t = useTranslations("Services");

  const services: Service[] = [
    {
      id: 1,
      title: t("service1.title"),
      image: furniture1.src,
      desc: "service1.desc",
      price: t("service1.price"),
    },
    {
      id: 2,
      title: t("service2.title"),
      image: electricity1.src,
      desc: "service2.desc",
      price: t("service2.price"),
    },
    {
      id: 3,
      title: t("service3.title"),
      image: plumbing.src,
      desc: "service3.desc",
      price: t("service3.price"),
    },
  ];

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#212529",
          fontWeight: "900",
        }}
      >
        {t("mainTitle")}
      </h2>
      <div className="services-grid">
        {services.map((service: Service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content" style={{ color: "#000" }}>
              <h3>{service.title}</h3>
              <p
                style={{
                  color: "#666",
                  padding: "0px 10px 10px 10px",
                  fontSize: "1rem",
                }}
                dangerouslySetInnerHTML={{
                  __html: t.raw(service.desc),
                }}
              ></p>

              <div className="service-price">{service.price}</div>
              <button
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={onScrollToForm}
              >
                {t("ctaButton")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
