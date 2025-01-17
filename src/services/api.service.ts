export const swUrl = "https://ajax.test-danit.com/api/swapi/films";

export const getData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
