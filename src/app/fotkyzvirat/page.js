import ContactBtn from "@/app/components/contactBtn/contactBtn";

export default function FotkyZvirat() {
  return (
    <div className="max-w-7xl pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h1 className="text-4xl">Zvířata</h1>
        <p className="mt-6">
          Máte kočku nebo psa, či jiného mazlíčka a chcete si ho nechat zvěčnit?
          Vašeho člena rodiny Vám velmi rád nafotím, ať už u Vás doma či v
          přírodě.
        </p>
        <ContactBtn />
      </main>
      {/* gallery napsat json data pro fotky, map přes id, kontrola length */}
      <div className="gallery"></div>
    </div>
  );
}
