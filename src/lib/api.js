export const searchNewPicture = async (query = "cat,dog") => {
  const url = `https://source.unsplash.com/200x200/?${query}`;
  const data = await fetch(url);
  const pic = await data.json();
  return pic;
};
