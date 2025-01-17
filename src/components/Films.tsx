import { useEffect, useState } from "react";
import { IFilm } from "../models/IFilm.ts";
import { getData, swUrl } from "../services/api.service.ts";
import Film from "./Film.tsx";

const Films = () => {
  const [films, setFilms] = useState<IFilm[]>([]);
  useEffect(() => {
    getData(swUrl).then((film) => setFilms(film));
  }, []);

  return (
    <div>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Films;
