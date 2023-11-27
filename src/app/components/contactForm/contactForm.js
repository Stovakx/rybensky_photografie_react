"use client"
import React, { useRef } from "react";
import ContactBtn from "../contactBtn/contactBtn";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
      <label htmlFor="name" className="mb-2 text-black">
        Jméno:
      </label>
      <input
        type="text"
        name="name"
        required
        className="p-2 border rounded mb-4"
      />

      <label htmlFor="email" className="mb-2 text-black">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="p-2 border rounded mb-4"
      />

      <label htmlFor="telephone" className="mb-2 text-black">
        Telefón:
      </label>
      <input
        type="tel"
        id="telephone"
        name="telephone"
        required
        className="p-2 border rounded mb-4"
      />

      <label htmlFor="message" className="mb-2 text-black">
        Vaše zpráva:
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="p-2 border rounded mb-4 resize-none h-24"
      ></textarea>

      <ContactBtn text={"Poslat"} className="text-center " type="submit" />
    </form>
  );
}
