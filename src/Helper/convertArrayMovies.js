import { IMAGE_DOMAIN } from "../Utils/setting";

export default function convertArrayMovies(array) {
  let convertedArray = [];
  for (let i = 0; i < array.length; i++) {
    let { poster_path } = array[i];
    array[i].poster_path = IMAGE_DOMAIN + poster_path;
    convertedArray.push(array[i]);
  }
  return convertedArray;
}
