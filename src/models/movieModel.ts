export interface Movie {
  title: string;
  id: number;
  media_type: string;
  poster_path?: string;
}

export interface Obj {
  [key: string]: any;
}
