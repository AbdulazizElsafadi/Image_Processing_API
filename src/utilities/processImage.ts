import sharp from "sharp";
import path = require("path");

export default async (
  fileName: string,
  width: number,
  height: number
): Promise<Object> => {
  // console.log(
  //   "path is:",
  //   path.join(__dirname, `../assets/images/${fileName}.jpg`)
  // );
  return await sharp(
    path.join(__dirname, `../../assets/images/${fileName}.jpg`)
  )
    .resize(width, height)
    .toFile(
      path.join(
        __dirname,
        `../../assets/thumb/${fileName}_${width}_${height}.jpg`
      )
    );
};
