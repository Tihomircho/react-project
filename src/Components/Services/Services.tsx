import React from 'react';
import '../../App.css'

// 1. Дефинираме тип за нашите услуги
interface Service {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Сглобяване на мебели",
    image: "https://unsplash.com",
    desc: "Професионално сглобяване на кухни, легла и гардероби от IKEA, Jysk и др.",
    price: "от 30 лв."
  },
  // ... останалите услуги тук
];

const Services: React.FC = () => {
  return (
    <section style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Нашите Услуги</h2>
      <div className="services-grid">
        {services.map((service: Service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{service.desc}</p>
              <div className="service-price">{service.price}</div>
              <button style={{ 
                marginTop: '15px', 
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
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
