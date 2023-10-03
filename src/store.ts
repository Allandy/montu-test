import { IGiphyImage, IState } from "./interfaces";

export type Action =
  | { type: "load-images"; payload: IGiphyImage[] }
  | { type: "set-query"; payload: string }
  | { type: "get-next-page" }
  | { type: "toggle-fav"; payload: string }
  | { type: "concat-images"; payload: IGiphyImage[] };

export const initialState: IState = {
  images: [],
  query: "",
  pageOffset: 0,
  limit: 10,
  favs: [],
  resource: "trending"
};

const mapFavorites = (images: IGiphyImage[], favs: string[]) => {
  return images.map((image: IGiphyImage) => {
    if (favs.some((fav) => fav === image.id)) {
      return { ...image, fav: true };
    } else {
      return { ...image, fav: false };
    }
  });
};

export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "load-images": {
      return {
        ...state,
        pageOffset: 0,
        images: mapFavorites(action.payload, state.favs)
      };
    }
    case "get-next-page": {
      // to-do
      return { ...state };
    }

    case "set-query": {
      return { ...state, query: action.payload };
    }

    default:
      return initialState;
  }
};
