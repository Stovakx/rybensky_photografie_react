import React from "react";
import Image from "next/image";
import Slider from "react-slick";


const ModalGallery = ({ images, isOpen, selectedImage, onClose }) => {
  const settings = {
    initialSlide: selectedImage,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    <div className={`modal-overlay ${isOpen ? "absolute" : ""}`}>
      <div className="modal">
        <button onClick={onClose}>Close</button>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="modal-slide h-full w-full">
              <Image src={src} alt="" layout="fill" objectFit="contain" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ModalGallery;
