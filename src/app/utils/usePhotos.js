"use client"
import { useState, useEffect } from "react";
import fetchPhotos from "./axios";

const usePhotos = (galleryName) => {
  const [photos, setPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPhotosData = async () => {
      try {
        const responsse = await fetchPhotos(galleryName);
        setPhotos(responsse);
      } catch (error) {
        console.error(error);
        setErrorMessage("Chyba při načtení fotografií");
      }
    };
    fetchPhotosData();
  });

  return {photos, errorMessage};
};

export default usePhotos;