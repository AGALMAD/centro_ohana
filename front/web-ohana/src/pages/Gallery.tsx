import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

import photos from "../data/photos.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const [index, setIndex] = useState<number>(-1);

  const images = photos.photos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
  }));

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{ maxWidth: "1000px", margin: "0 auto" }}
        className=" px-4 py-16 "
      >
        <h1 className="text-center text-4xl font-title text-[#9a4c52] mb-10 pb-2">
          GALERIA
        </h1>

        <div className="gallery-grid">
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
        />
      </div>
      <Footer></Footer>
    </>
  );
}
