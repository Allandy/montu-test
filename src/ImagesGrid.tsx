import classNames from "classnames";
import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import { IGiphyImage } from "./interfaces";
import { Action } from "./store";

interface ImagesGridProps {
  images: IGiphyImage[];

  dispatch: React.Dispatch<Action>;
}

export const ImagesGrid = ({ images, dispatch }: ImagesGridProps) => {
  const [favClickedId, setFavClickedId] = useState("");
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
            <MDBIcon
              icon="heart"
              className={classNames({
                "heart-icon": true,
                "heart-icon--active": image.fav,
                "animate__animated animate__heartBeat":
                  favClickedId === image.id && image.fav
              })}
              onClick={() => {
                dispatch({ type: "toggle-fav", payload: image.id });
                setFavClickedId(image.id);
              }}
            />
          </div>
        ))}
      </section>
    </>
  );
};
