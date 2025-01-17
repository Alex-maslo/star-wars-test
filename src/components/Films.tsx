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
    <div className="grid grid-cols-3 gap-4">
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Films;
