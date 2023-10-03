export interface IGiphyImage {
  id: string;
  title: string;
  fav: boolean;
  images: {
    original: {
      height: string;
      width: string;
      url: string;
      webp: string;
    };
    fixed_width: {
      height: string;
      width: string;
      url: string;
      webp: string;
    };
    fixed_width_small: {
      height: string;
      width: string;
      url: string;
      webp: string;
    };
  };
}

export interface IState {
  resource: string;
  images: IGiphyImage[];
  pageOffset: number;
  limit: number;
  query: string;
  favs: string[];
}
export interface IAPIGiphy {
  data: IGiphyImage[];
}
