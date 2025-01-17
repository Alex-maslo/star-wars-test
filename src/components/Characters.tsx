import { FC, useEffect, useState } from "react";
import { getData } from "../services/api.service.ts";
import { IChar } from "../models/IChar.ts";

type CharactersProps = {
  chars: string[];
};
const Characters: FC<CharactersProps> = ({ chars }) => {
  const [arrChars, setArrChars] = useState<IChar[]>([]);

  useEffect(() => {
    chars.forEach((url) => {
      getData(url).then((char) => {
        setArrChars((prev) => [...prev, char]);
      });
    });
  }, []);

  return (
    <ul className="list-inside list-disc">
      {arrChars.map((e) => {
        return <li>{e.name}</li>;
      })}
    </ul>
  );
};

export default Characters;
