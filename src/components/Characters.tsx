import { FC } from "react";

type CharactersProps = {
  chars: string[];
};
const Characters: FC<CharactersProps> = ({ chars }) => {
  console.log(chars);
  return <ul></ul>;
};

export default Characters;
