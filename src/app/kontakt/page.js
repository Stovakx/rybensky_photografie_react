import ContactForm from "../components/contactForm/contactForm";
export default function Kontakt() {
  return (
    <div className="max-w-7xl min-h-full pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h1 className="text-4xl my-4">Kontakt</h1>
        <p className="kontaktText text-center text-xl">
          Chcete párové fotky, rodinné s dětmi, či prostě jen památku na svého
          mazlíčka? Nebo něco úplně jiného? Neváhejte mne kontaktovat skrze
          formulář níže. Spojím se s Vámi a domluvíme všechny podrobnosti.
        </p>
      </main>
      <div
        className="about mt-10 
            rounded-xl
            ring-2 ring-offset-2 ring-gray-100 ring-opacity-50
            shadow-xl
            p-5"
      >
        <ContactForm/>
      </div>
    </div>
  );
}
