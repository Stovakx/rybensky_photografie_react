import Image from "next/image";
import Masonry from '@mui/lab/Masonry';

export default function IndexGallery({ photos, errorMessage }) {
  return (
    <>
      <Masonry columns={4} spacing={2}>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <Image
              key={photo.id}
              className="gallery-img relative object-cover h-auto w-100"
              src={photo.img}
              loading="lazy"
              alt={`obrázek ${photo.id}`}
              fill={true}
            />
          ))
        ) : (
          <p className="text-center">{errorMessage || "Loading..."}</p>
        )}
      </Masonry>
    </>
  );
}
