import { FC } from "react";
import { IFilm } from "../models/IFilm.ts";
import Characters from "./Characters.tsx";

type FilmProps = {
  film: IFilm;
};
const Film: FC<FilmProps> = ({ film }) => {
  return (
    <div className="border border-orange-500 p-4">
      {film.name}

      <Characters chars={film.characters} />
    </div>
  );
};

export default Film;
