"use client";
import React, { useState } from "react";
import style from "./Features.module.scss";
import Image from "next/image";
import dushkabina1 from "../../assets/dush_kabina1.jpg";
import dushkabina2 from "../../assets/dush_kabina2.1.jpg";
import dushkabina3 from "../../assets/dush_kabina2.jpg";
import garderob from "../../assets/garderob1.jpg";
import garderob2 from "../../assets/garderob2.jpg";
import garderob3 from "../../assets/garderob3.jpg";
import shkafBania from "../../assets/shkaf_banq1.jpg";
import shkafBania2 from "../../assets/shkaf_banq2.jpg";
import shkafBania3 from "../../assets/shkaf_banq3.jpg";
import shkafBania4 from "../../assets/shkaf_banq4.jpg";
import { StaticImageData } from "next/image";
// Интерфейс за структурата на всяка снимка
interface GalleryProject {
  id: number;
  title: string;
  category: string;
  images: (string | StaticImageData)[];
}

const Gallery: React.FC = () => {
  // Примерен масив със снимки (замени ги с твои реални линкове от assets)
  const galleryData: GalleryProject[] = [
    {
      id: 1,
      title: "Монтаж на душ кабина",
      category: "ВиК",
      images: [dushkabina1, dushkabina2, dushkabina3],
    },
    {
      id: 2,
      title: "Смяна на ел. табло",
      category: "Електро",
      images: [],
    },
    {
      id: 3,
      title: "Сглобяване на гардероб",
      category: "Мебели",
      images: [garderob, garderob2, garderob3],
    },
    {
      id: 4,
      title: "Монтаж мебели за баня",
      category: "ВиК",
      images: [shkafBania, shkafBania2, shkafBania3, shkafBania4],
    },
    {
      id: 5,
      title: "Монтаж на LED осветление",
      category: "Електро",
      images: [],
    },
    {
      id: 6,
      title: "Поправка на интериорна врата",
      category: "Дребни ремонти",
      images: [],
    },
  ];

  // Състояние за филтъра по категории
  const [filter, setFilter] = useState<string>("Всички");
  const [activeProject, setActiveProject] = useState<GalleryProject | null>(
    null,
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredItems =
    filter === "Всички"
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

  const categories = ["Всички", "ВиК", "Електро", "Мебели", "Дребни ремонти"];

  // Функция за отваряне на албума
  const openLightbox = (project: GalleryProject) => {
    setActiveProject(project);
    setCurrentImageIndex(0); // Започваме винаги от първата (главна) снимка
  };

  // Навигация в албума: Напред
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Спира затварянето на модалния прозорец при клик върху стрелката
    if (activeProject) {
      setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
    }
  };

  // Навигация в албума: Назад
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + activeProject.images.length) %
          activeProject.images.length,
      );
    }
  };

  return (
    <div className={`container ${style.featuresWrapper}`}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase">Нашата Галерия</h2>
        <p className="text-muted">
          Разгледайте завършените проекти на Mr. Fixer Service в София
        </p>
        <div className="border-warning border-3 border-bottom d-inline-block w-25"></div>
      </div>

      {/* Бутони за филтриране */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn rounded-pill px-4 ${filter === cat ? "btn-warning fw-bold" : "btn-outline-secondary"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Решетка с проекти */}
      <div className="row g-4">
        {filteredItems.map((project) => (
          <div key={project.id} className="col-12 col-sm-6 col-md-4">
            <div
              className="card h-100 border-0 shadow-sm position-relative overflow-hidden"
              style={{ cursor: "pointer" }}
              onClick={() => openLightbox(project)}
            >
              {/* Корица - показва само първата снимка (images[0]) */}
              <div
                className="position-relative overflow-hidden"
                style={{ height: "250px" }}
              >
                {project.images && project.images[0] ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                ) : (
                  <div className="w-100 h-100 bg-secondary-subtle d-flex align-items-center justify-content-center">
                    <span className="text-muted small">Няма снимка</span>
                  </div>
                )}
                {/* Индикатор за броя снимки в албума */}
                <span className="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 small m-2 rounded opacity-75">
                  📸 {project.images.length} снимки
                </span>
              </div>

              <div className="card-body bg-light text-center">
                <span className="badge bg-secondary mb-2">
                  {project.category}
                </span>
                <h5 className="card-title h6 fw-bold mb-0">{project.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Модален прозорец със Слайдър (Lightbox Album) */}
      {activeProject && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.9)", zIndex: 1050 }}
          onClick={() => setActiveProject(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0 position-relative text-center">
              {/* Бутон за затваряне */}
              <button
                type="button"
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                style={{ zIndex: 1100 }}
                onClick={() => setActiveProject(null)}
              ></button>

              {/* Основна снимка от слайдъра */}
              <div className="position-relative d-inline-block mx-auto">
                {activeProject.images &&
                activeProject.images[currentImageIndex] ? (
                  <Image
                    src={activeProject.images[currentImageIndex]}
                    alt={`Снимка ${currentImageIndex + 1}`}
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "85vh", width: "auto" }}
                  />
                ) : (
                  <div className="w-100 h-100 bg-secondary-subtle d-flex align-items-center justify-content-center">
                    <span className="text-muted small">Няма снимка</span>
                  </div>
                )}

                {/* Показваме стрелки за навигация само ако има повече от 1 снимка */}
                {activeProject.images.length > 1 && (
                  <>
                    {/* Стрелка Назад */}
                    <button
                      className="btn btn-dark opacity-75 position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle"
                      style={{ width: "45px", height: "45px" }}
                      onClick={prevImage}
                    >
                      ❮
                    </button>

                    {/* Стрелка Напред */}
                    <button
                      className="btn btn-dark opacity-75 position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle"
                      style={{ width: "45px", height: "45px" }}
                      onClick={nextImage}
                    >
                      ❯
                    </button>
                  </>
                )}
              </div>

              {/* Текст и брояч под снимката */}
              <div className="text-white mt-3">
                <h5 className="fw-bold mb-1">{activeProject.title}</h5>
                <p className="small text-secondary">
                  Снимка {currentImageIndex + 1} от{" "}
                  {activeProject.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
