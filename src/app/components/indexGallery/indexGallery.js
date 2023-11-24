import Image from "next/image";
import ModalGallery from "../modalGallery/modalGallery";
import { useState } from "react";

export default function IndexGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/gallery/_DSC0194_result.jpg", isPortrait: true },
    { src: "/gallery/_DSC0439_result.png", isPortrait: true },
    { src: "/gallery/_DSC9274_result.jpg", isPortrait: false },
    { src: "/gallery/_DSC9207_result.jpg", isPortrait: true },
    { src: "/gallery/_DSC9401_result.jpg", isPortrait: true },
    { src: "/gallery/_DSC9275_result.jpg", isPortrait: false },
    { src: "/gallery/_DSC9276_result.jpg", isPortrait: false },
    { src: "/gallery/_DSC9379_result.jpg", isPortrait: true },
    { src: "/gallery/_DSC9383_result.jpg", isPortrait: true },
    { src: "/gallery/hex-1_result.jpg", isPortrait: true },
    { src: "/gallery/_DSC9207_result.jpg", isPortrait: true },
  ];

  const openModal = (index) => {
    setSelectedImage(index);
    setModalOpen(true);
  };
/* vymyslet lepší logiku pro prohazování order obrázků ??? */
  return (
    <>
      <div className="gallery grid grid-cols-5 grid-rows-auto gap-1 mx-auto my-8">
        {images.map((item, index) => (
          <div
            key={index}
            className={`grid-item relative order-${index + 1} ${
              item.isPortrait
                ? "h-52 sm:h-72 lg:h-96 col-span-3 md:col-span-2 lg:col-span-1"
                : "col-span-6 lg:col-span-2 h-52 sm:h-64 md:h-96"
              }
              ${index === 2 ? "md:order-4 md:col-span-4":"" }
              ${index === 3 ? "md:order-3":""}
              ${index === 9 ? "md:order-11" :""}
              ${index === 10 ?"md:order-10 md:h-96":"" }`}
            onClick={() => openModal(index)}
          >
            <Image src={item.src} alt="" fill={true} objectFit="cover" />
          </div>
        ))}
      </div>

      {modalOpen && (
        <ModalGallery
          images={images.map((item) => item.src)}
          isOpen={modalOpen}
          selectedImage={selectedImage}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
