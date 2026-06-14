"use client";
import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import style from "./Form.module.scss";
import imageRight from "../../assets/hand-drawn-flat-design-handyman2.png";
import { RefObject } from "react";
import Image from "next/image";

// Сменете това с вашия истински API ключ от ://imgbb.com
const IMGBB_API_KEY = "0f0433653e112a063ee174e40f67b1c0";

interface FormSection {
  formRef?: RefObject<HTMLDivElement | null>;
}

interface ImageItem {
  file: File;
  previewUrl: string;
}

const ContactForm: React.FC<FormSection> = ({ formRef }) => {
  const form = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Пазим оригиналните файлове и техните локални линкове за превю на екрана
  const [imagesList, setImagesList] = useState<ImageItem[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Функция, която се задейства веднага при избор на снимки от клиента
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selectedImages: ImageItem[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      selectedImages.push({
        file: file,
        // Създава временен локален уеб адрес в браузъра само за превюто на екрана
        previewUrl: URL.createObjectURL(file),
      });
    }

    setImagesList((prev) => {
      const combined = [...prev, ...selectedImages];
      if (combined.length > 4) {
        alert("Можете да прикачите максимум 4 снимки.");
        return combined.slice(0, 4);
      }
      return combined;
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Функция за изтриване на снимка от превюто преди изпращане
  const handleRemoveImage = (indexToRemove: number) => {
    setImagesList((prev) => {
      // Важно: Освобождаваме паметта от временния URL адрес
      URL.revokeObjectURL(prev[indexToRemove].previewUrl);
      return prev.filter((_, index) => index !== indexToRemove);
    });
  };

  // Основна функция за изпращане на формата
  const sendEmail = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>,
  ) => {
    e.preventDefault();
    if (!form.current) return;

    setIsUploading(true);
    const uploadedUrls: string[] = [];

    try {
      // 1. Качване на всяка снимка в ImgBB поотделно
      for (const item of imagesList) {
        const formData = new FormData();
        formData.append("image", item.file);

        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          {
            method: "POST",
            body: formData,
          },
        );

        if (!response.ok) {
          throw new Error("Проблем при качването на снимка в сървъра.");
        }

        const result = await response.json();
        // Взимаме директния URL адрес на качената снимка
        uploadedUrls.push(result.data.url);
      }

      // 2. Обединяваме всички линкове в един текст, разделен с нов ред
      const linksText =
        uploadedUrls.length > 0
          ? uploadedUrls.join("\n")
          : "Няма прикачени снимки";

      // 3. Динамично инжектираме готовите линкове като стойност в скрития input
      const hiddenInput = form.current.querySelector(
        'input[name="attached_images"]',
      ) as HTMLInputElement;
      if (hiddenInput) {
        hiddenInput.value = linksText;
      }

      // 4. Изпращаме леката текстова форма към EmailJS
      await emailjs.sendForm(
        "service_e5jm77k",
        "template_n4hgxmp",
        form.current,
        "_4tTnZoJe-Ig8Nz99",
      );

      alert("Съобщението и снимките са изпратени успешно!");

      const cookieConsent = localStorage.getItem("cookie-consent");
      if (
        cookieConsent === "accepted" &&
        typeof window !== "undefined" &&
        (window as any).fbq
      ) {
        (window as any).fbq("track", "Lead");
        console.log("Facebook Pixel: Успешно отчетено запитване (Lead)!");
      }

      // Почистваме състоянията при успех
      imagesList.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      setImagesList([]);
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Грешка при изпращането. Моля, опитайте отново.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section style={{ backgroundColor: "#212529" }}>
      <div className={`container py-4 ${style.formWrapper}`} ref={formRef}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <form className={style.form} ref={form} onSubmit={sendEmail}>
              <input type="hidden" name="attached_images" value="" />

              <label htmlFor="name-name">Име</label>
              <input id="name-name" type="text" name="user_name" required />

              <label htmlFor="mail">Имейл</label>
              <input id="mail" type="email" name="user_email" required />

              <label htmlFor="msg">Описание на ремонта</label>
              <textarea id="msg" name="message" required />

              <div className="text-white">
                Снимки на обекта (може няколко, макс 4)
              </div>
              <label htmlFor="file-upload" className={style.customFileButton}>
                Избери снимки от устройството
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                disabled={isUploading}
                className={style.hiddenFileInput}
              />

              {/* Превю мрежа на екрана */}
              {imagesList.length > 0 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  {imagesList.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        borderRadius: "6px",
                        overflow: "hidden",
                        border: "1px solid #495057",
                        aspectRatio: "1/1",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.previewUrl}
                        alt={`Превю ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        disabled={isUploading}
                        style={{
                          position: "absolute",
                          top: "2px",
                          right: "2px",
                          backgroundColor: "rgba(220, 53, 69, 0.9)",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          fontSize: "10px",
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {isUploading && (
                <span style={{ color: "#ffc107", fontSize: "14px" }}>
                  Качване на снимките в сървъра...
                </span>
              )}

              <button type="submit" disabled={isUploading}>
                {isUploading ? "Моля изчакайте..." : "Изпрати запитване"}
              </button>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <Image
              src={imageRight}
              alt="Image right"
              className={style.imageRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
