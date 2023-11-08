import ContactBtn from "@/app/components/contactBtn/contactBtn";

export default function ParoveFotky() {
  return (
    <div className="max-w-7xl pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h1 className="text-4xl">Páry/Rodiny</h1>
        <p className="mt-6">
          Jste zamilovaní a chcete společnou fotografii, či fotku do rodinného
          alba třeba i s babičkou? Není problém. Ve všem rád vyhovím.
        </p>
        <ContactBtn />
      </main>
      {/* gallery napsat json data pro fotky, map přes id, kontrola length */}
      <div className="gallery"></div>
    </div>
  );
}
