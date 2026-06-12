"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import style from "./Partners.module.scss";

// Дефинираме структурата на всеки партньор
interface Partner {
  id: number;
  name: string;
  logo: string | StaticImageData; // Поддържа локални импорти и URL низове
  websiteUrl?: string; // Опционален линк към сайта на партньора
}

// Примерен масив с данни (заменете с вашите реални лога)
const PARTNERS_DATA: Partner[] = [
  {
    id: 1,
    name: "Партньор 1",
    logo: "/assets/partner1.png",
    websiteUrl: "https://partner1.com",
  },
  {
    id: 2,
    name: "Партньор 2",
    logo: "/assets/partner2.png",
    websiteUrl: "https://partner2.com",
  },
  { id: 3, name: "Партньор 3", logo: "/assets/partner3.png" }, // Без линк
  {
    id: 4,
    name: "Партньор 4",
    logo: "/assets/partner4.png",
    websiteUrl: "https://partner4.com",
  },
];

const Partners: React.FC = () => {
  return (
    <section className={`${style.partnersSection} py-5`}>
      <div className="container">
        <h2 className={`${style.title} text-center mb-5`}>Нашите Партньори</h2>

        <div className="row justify-content-center align-items-center g-4">
          {PARTNERS_DATA.map((partner) => {
            const content = (
              <div className={style.logoWrapper}>
                <Image
                  src={partner.logo}
                  alt={`Лого на ${partner.name}`}
                  width={150} // Настройте според дизайна
                  height={60} // Настройте според дизайна
                  className={style.logoImg}
                />
              </div>
            );

            return (
              <div
                key={partner.id}
                className="col-6 col-sm-4 col-md-3 d-flex justify-content-center"
              >
                {partner.websiteUrl ? (
                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.partnerLink}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
