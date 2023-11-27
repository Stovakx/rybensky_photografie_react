import React from "react";
import Image from "next/image";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CloseIcon from "@mui/icons-material/Close";
Modal.setAppElement(".__className_e66fe9");

const ModalGallery = ({ images, isOpen, selectedImage, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Image Modal"
    >
      <div className="modal-header relative h-1/5">
        <button onClick={onClose} className="absolute right-0 top-3">
          <CloseIcon className="text-4xl" />
        </button>
      </div>
      <div className="modal-content w-full  h-4/5 flex justify-center items-center">
        <div className="image-slider w-1/3 h-2/3 ">
          <Carousel selectedItem={selectedImage} showThumbs={false}>
            {images.map((image, index) => (
              <div key={index} className="image-slide h-96">
                <Image src={image} alt={`Image ${index + 1}`} fill={true} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Modal>
  );
};

export default ModalGallery;
