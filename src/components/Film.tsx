import { FC } from "react";
import { IFilm } from "../models/IFilm.ts";

type FilmProps = {
  film: IFilm;
};
const Film: FC<FilmProps> = ({ film }) => {
  return <div>{film.name}</div>;
};

export default Film;
