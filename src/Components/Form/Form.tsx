"use client";
import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import style from "./Form.module.scss";
import imageRight from "../../assets/hand-drawn-flat-design-handyman2.png";
import { RefObject } from "react";
import Image from "next/image";

interface FormSection {
  formRef?: RefObject<HTMLDivElement | null>;
}

const ContactForm: React.FC<FormSection> = ({ formRef }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_e5jm77k",
          "template_n4hgxmp",
          form.current,
          "_4tTnZoJe-Ig8Nz99",
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log("Статус от сървъра:", result.status);
            alert("Съобщението е изпратено успешно!");
            (e.target as HTMLFormElement).reset();
          },
          (error: { text: string }) => {
            alert("Грешка при изпращането: " + error.text);
          },
        );
    }
  };

  return (
    <section style={{ backgroundColor: "#212529" }}>
      <div className={`container py-4 ${style.formWrapper}`} ref={formRef}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <form
              className={style.form}
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "500px",
              }}
            >
              <label>Име</label>
              <input type="text" name="user_name" required />

              <label>Имейл</label>
              <input type="email" name="user_email" required />

              <label>Описание на ремонта</label>
              <textarea name="message" required />

              <button type="submit">Изпрати запитване</button>
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
