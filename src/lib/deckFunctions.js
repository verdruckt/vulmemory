export const generateDeck = (cardArray) => {
  const halfArr = cardArray.map((img, id) => ({
    id,
    src: img,
    clicked: false,
    match: false,
  }));

  const objArr = [...halfArr, ...halfArr];
  const result = objArr.map((obj) => ({
    ...obj,
    uid: Math.floor(Math.random() * 9999),
  }));
  //   console.log(result);
  return randomize(result);
};

const randomize = (Arr) => {
  const result = [];

  while (Arr.length > 0) {
    const num = Math.floor(Math.random() * Arr.length);
    result.push(...Arr.splice(num, 1));
  }

  return result;
};

export const checkForAinB = (A, B) => B.indexOf(A) !== -1;

export const sleepFor = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));
