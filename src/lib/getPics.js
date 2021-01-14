const loadImage = async (id) => {
  const imageModule = await import(`../assets/${id}.jpg`);
  const path = imageModule.default;
  return path;
};

const makePicArray = async (count = 8) => {
  let picArr = [];

  for (count; count > 0; count--) {
    picArr.push(await loadImage(count));
  }
  return picArr;
};

const pics = makePicArray(8);
export default pics;
