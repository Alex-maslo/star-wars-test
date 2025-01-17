import { FC } from "react";
import { IFilm } from "../models/IFilm.ts";
import Characters from "./Characters.tsx";

type FilmProps = {
  film: IFilm;
};
const Film: FC<FilmProps> = ({ film }) => {
  return (
    <div className="border border-orange-500 p-4">
      <h2 className="font-semibold">{film.name}</h2>

      <Characters chars={film.characters} />
    </div>
  );
};

export default Film;
