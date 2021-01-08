import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import pic5 from "../assets/5.jpg";
import pic6 from "../assets/6.jpg";
import pic7 from "../assets/7.jpg";
import pic8 from "../assets/8.jpg";
import { searchNewPicture } from "./api";

export const picsLocal = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
let picNum = 8;

const pics = () => {
  let picArray = [];
  for (let i = picNum; i > 0; i--) {
    const picURL = searchNewPicture();
    picArray.push(picURL);
  }
  console.log({ picArray });
  return picArray;
};

export default pics;
