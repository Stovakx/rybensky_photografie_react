import React, { useState } from "react";
import Image from "next/image";
import ModalGallery from "../modalGallery/modalGallery";

export default function Gallery({ photos, errorMessage }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (photoId) => {
    setSelectedImage(photoId - 1);
    setModalOpen(true);
  };

  return (
    <>
      <div className="gallery grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-2 mt-5">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openModal(photo.id)}
              className="h-52 relative lg:h-96"
            >
              <Image
                className="gallery-img"
                src={photo.img}
                loading="lazy"
                alt={`obrázek ${photo.id}`}
                fill={true}
                sizes="100% 100%"
              />
            </div>
          ))
        ) : (
          <p className="text-center">{errorMessage || "Loading..."}</p>
        )}
      </div>
      {modalOpen && (
        <ModalGallery
          images={photos.map((photo) => photo.img)}
          isOpen={modalOpen}
          selectedImage={selectedImage}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
