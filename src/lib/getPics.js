import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";

const getPics = (squareSize) => {
  let pics = (squareSize * squareSize) / 2;
  const all = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  const choosen = [];

  for (pics; pics > 0; pics--) {
    const index = Math.floor(Math.random() * all.length);
    choosen.push(all.splice(index, 1));
  }
  console.log(choosen);
  return choosen;
};

export default getPics;
