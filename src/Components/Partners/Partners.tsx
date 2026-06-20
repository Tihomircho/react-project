"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import style from "./Partners.module.scss";
import dostavkiLogo from "../../assets/DostavkiAvstriavizitka.png";
import eMaistor from "../../assets/e-m-logo-2.png";
import { useTranslations } from "next-intl";

// Дефинираме структурата на всеки партньор
interface Partner {
  id?: number;
  name?: string;
  logo: string | StaticImageData;
  websiteUrl?: string;
  imgwidth?: number;
  imgheight?: number;
}

// Примерен масив с данни (заменете с вашите реални лога)
const PARTNERS_DATA: Partner[] = [
  {
    name: "E-maistor",
    logo: eMaistor,
    websiteUrl: "https://e-maistor.com/",
    imgwidth: 250,
    imgheight: 180,
    id: 1,
  },
  {
    id: 2,
    name: "Доставки от и до Австрия",
    logo: dostavkiLogo,
    websiteUrl: "https://www.dostavki-avstria.com/",
    imgwidth: 250,
    imgheight: 180,
  },
  //   {
  //     id: 3,
  //     name: "Партньор 3",
  //     logo: "/assets/partner3.png",
  //     imgwidth: 150,
  //     imgheight: 180,
  //   },
  {
    id: 4,
    name: "yourstransports",
    logo: "https://www.yourstransports.at/themes/yourstransports/assets/img/yourtransports-logo.svg",
    websiteUrl: "https://www.yourstransports.at/de/",
    imgwidth: 150,
    imgheight: 180,
  },
];

const Partners: React.FC = () => {
  const t = useTranslations("Partners");

  return (
    <section className={`${style.partnersSection}`}>
      <div className="container">
        <h2 className={`${style.title} text-center mb-5`}>
          {t("partnersTitle")}
        </h2>

        <div className="row justify-content-center align-items-center g-4">
          {PARTNERS_DATA.map((partner) => {
            const content = (
              <div className={style.logoWrapper}>
                <Image
                  src={partner.logo}
                  alt={`Лого на ${partner.name}`}
                  width={partner.imgwidth} // Настройте според дизайна
                  height={partner.imgheight} // Настройте според дизайна
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
