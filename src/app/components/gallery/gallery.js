/* vytvořit galerie pro všechny stránky + modalGallery + aby se na nakliknutou 
fotku ukázala plněhodnotná správná fotka podle id, takže na id1 se musí ukázat id1 */
/* grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 */
import React from "react";
import Image from "next/image";

export default function Gallery({ photos, errorMessage }) {
  return (
    <div className="gallery flex flex-wrap  gap-2">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id} className="h-52 flex-1  relative ">
            <Image
              className="gallery-img relative object-cover h-auto w-100"
              src={photo.img}
              loading="lazy"
              alt={`obrázek ${photo.id}`}
              fill={true}
            />
          </div>
        ))
      ) : (
        <p className="text-center">{errorMessage || "Loading..."}</p>
      )}
    </div>
  );
}
