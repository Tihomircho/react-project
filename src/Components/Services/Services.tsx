"use client";
import React from "react";
import furniture1 from "./../../assets/furniture1.jpg";
import electricity1 from "./../../assets/electricity1.jpg";
import plumbing from "./../../assets/plumbing-repair-service.jpg";

interface Service {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: string;
}
interface ServicesProps {
  onScrollToForm: () => void;
}
const services: Service[] = [
  {
    id: 1,
    title: "Монтаж и демонтаж на мебели",
    image: furniture1.src,
    desc: "Професионално <strong>сглобяване</strong> и <strong>разглобяване</strong> на всякакъв вид <strong>мебели</strong> – <strong>гардероби</strong>, <strong>спални</strong> и <strong>секции</strong>. Бързо, прецизно и с внимание към детайла, като гарантирам пълна здравина и перфектно нивелиране на вашите нови или стари мебели.",
    price: "от 20 €.",
  },
  {
    id: 2,
    title: "Електро Услуги",
    image: electricity1.src,
    desc: "Професионален <strong>монтаж</strong> и <strong>подмяна</strong> на <strong>осветителни тела</strong>, <strong>ключове</strong> и <strong>контакти</strong> за вашия дом или офис. Осигурявам <strong>безопасно свързване</strong>, <strong>прецизна работа</strong> и <strong>надеждност</strong> на електроинсталацията, за да гарантирам вашия комфорт и спокойствие.",
    price: "от 20 €.",
  },
  {
    id: 3,
    title: "ВиК Услуги",
    image: plumbing.src,
    desc: "Професионален и чист <strong>монтаж</strong> на <strong>смесители (батерии)</strong> за <strong>мивки</strong>, <strong>спирателни кранчета</strong> и <strong>мебели за баня</strong>. Гарантирам <strong>сигурност срещу течове</strong>, коректност и качествено изпълнение на <strong>всяка сглобка</strong>, за да си <strong>спестите</strong> време и бъдещи ремонти.",
    price: "от 20 €.",
  },
];

const Services: React.FC<ServicesProps> = ({ onScrollToForm }) => {
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
        Нашите Услуги
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
                dangerouslySetInnerHTML={{ __html: service.desc }}
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
                Заяви ремонт
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
