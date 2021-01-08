export const searchNewPicture = (query = "cat,dog") => {
  const url = `https://source.unsplash.com/200x200/?${query}`;

  return url;
};
