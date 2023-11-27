'use client'
import ContactBtn from "@/app/components/contactBtn/contactBtn";
import usePhotos from "@/app/utils/usePhotos";
import Gallery from "@/app/components/gallery/gallery";

export default function ParoveFotky() {
  const { photos, errorMessage } = usePhotos("gallery");
  return (
    <div className="max-w-7xl pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h1 className="text-4xl">Páry/Rodiny</h1>
        <p className="mt-6">
          Jste zamilovaní a chcete společnou fotografii, či fotku do rodinného
          alba třeba i s babičkou? Není problém. Ve všem rád vyhovím.
        </p>
      </main>
      <Gallery photos={photos} errorMessage={errorMessage} />
      <ContactBtn text={"kontaktujte mě"}/>
    </div>
  );
}
