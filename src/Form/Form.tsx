import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  // Указваме, че референцията е към HTMLFormElement
  const form = useRef<HTMLFormElement>(null);

  // Указваме, че e е React.FormEvent
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Проверяваме дали формата съществува
    // if (form.current) {
    //   emailjs
    //     .sendForm(
    //       "YOUR_SERVICE_ID",
    //       "YOUR_TEMPLATE_ID",
    //       form.current,
    //       "YOUR_PUBLIC_KEY",
    //     )
    //     .then(
    //       (result) => {
    //         alert("Съобщението е изпратено успешно!");
    //         (e.target as HTMLFormElement).reset(); // Изчиства формата след успех
    //       },
    //       (error) => {
    //         alert("Грешка при изпращането: " + error.text);
    //       },
    //     );
    // }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
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
  );
};

export default ContactForm;
