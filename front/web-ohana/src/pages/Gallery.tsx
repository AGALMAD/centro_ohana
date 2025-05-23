import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

import photos from "../data/photos.json";

export default function Gallery() {
  const [index, setIndex] = useState<number>(-1);

  const images = photos.photos
    .filter((photo) => !photo.disabled)
    .map((photo) => ({
      src: photo.src,
      width: photo.width,
      height: photo.height,
      alt: photo.alt,
      caption: photo.caption,
    }));

  return (
    <>
      <div
        style={{ maxWidth: "1000px", margin: "0 auto" }}
        className=" px-4 py-16 "
      >
        <h1 className="text-center text-4xl font-title text-[#9a4c52] mb-10 pb-2">
          GALERIA
        </h1>

        <div className="gallery">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt || `imagen-${i}`}
              onClick={() => setIndex(i)}
              loading="lazy"
              className="gallery-item"
            />
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          index={index}
          controller={{ closeOnBackdropClick: true }}
          on={{
            view: ({ index: currentIndex }) => setIndex(currentIndex),
          }}
          render={{
            slideHeader: ({}) => (
              <div
                style={{
                  padding: "10px",
                  color: "white",
                  background: "rgba(0,0,0,0.5)",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  textAlign: "center",
                  zIndex: 1000,
                }}
              >
                {/* para poner un texto arriba */}
              </div>
            ),
          }}
        />
      </div>
    </>
  );
}
