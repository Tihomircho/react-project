import React from "react";
import "../../App.css";
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
    image: furniture1,
    desc: "Професионално сглобяване и разглобяване на всякакъв вид мебели – гардероби, спални и секции. Бързо, прецизно и с внимание към детайла, като гарантирам пълна здравина и перфектно нивелиране на вашите нови или стари мебели.",
    price: "от 30 €.",
  },
  {
    id: 2,
    title: "Електро Услуги",
    image: electricity1,
    desc: "Професионален монтаж и подмяна на осветителни тела, ключове и контакти за вашия дом или офис. Осигурявам безопасно свързване, прецизна работа и надеждност на електроинсталацията, за да гарантирам вашия комфорт и спокойствие.",
    price: "от 30 €.",
  },
  {
    id: 3,
    title: "ВиК Услуги",
    image: plumbing,
    desc: "Професионален и чист монтаж на смесители (батерии) за мивки, спирателни кранчета и мебели за баня. Гарантирам сигурност срещу течове, коректност и качествено изпълнение на всяка сглобка, за да си спестите време и бъдещи ремонти.",
    price: "от 30 €.",
  },
];

const Services: React.FC<ServicesProps> = ({ onScrollToForm }) => {
  return (
    <section style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#007bff",
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
              >
                {service.desc}
              </p>
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
