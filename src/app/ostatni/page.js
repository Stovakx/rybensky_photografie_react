"use client";
import ContactBtn from "@/app/components/contactBtn/contactBtn";
import usePhotos from "@/app/utils/usePhotos";
import Gallery from "@/app/components/gallery/gallery";

export default function Ostatni() {
  const { photos, errorMessage } = usePhotos("gallery");

  return (
    <div className="max-w-7xl pt-32  justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <main className="text-center pt-0 md:pt-3">
        <h1 className="text-4xl">Ostatní</h1>
        <p className="mt-6">Příroda, budovy a vše, co naše země nabídne.</p>
        <Gallery photos={photos} errorMessage={errorMessage} />
        <ContactBtn />
      </main>
    </div>
  );
}
