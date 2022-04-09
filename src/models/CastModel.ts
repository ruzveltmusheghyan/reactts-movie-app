export type Actor = {
  id: number;
  profile_path: string;
  name: string;
};

export type Cast = {
  cast: Actor[];
};
