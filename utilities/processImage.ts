import sharp from "sharp";
import path = require("path");
import { dirname } from "../src/app";

export default async (fileName: string, width: number, height: number) => {
  return await sharp(path.join(dirname, `/assets/images/${fileName}.jpg`))
    .resize(width, height)
    .toFile(
      path.join(dirname, `/assets/thumb/${fileName}_${width}_${height}.jpg`)
    );
};
