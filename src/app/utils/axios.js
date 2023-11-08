"use client"
import axios from "axios";

export default async function fetchPhotos(dataTypes) {
    try {
      const response = await axios.get("/data/gallery.json");
      return response.data[dataTypes];
    } catch (error) {
      console.error("Chyba při načítání dat: ", error);
      return [];
    }
  }
  
