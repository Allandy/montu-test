import { IGiphyImage } from "./interfaces";

interface ImagesGridProps {
  images: IGiphyImage[];
}

export const ImagesGrid = ({ images }: ImagesGridProps) => {
  return (
    <>
      <section className="giphs-layout">
        {images?.map((image: IGiphyImage) => (
          <div className="image-container" key={image.id}>
            <img
              src={image.images.original.url}
              alt={image.title}
              width={200}
              height={200}
              loading="lazy"
              className="giph-image"
            />
          </div>
        ))}
      </section>
    </>
  );
};
