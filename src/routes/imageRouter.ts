import express from "express";
import sharp from "sharp";
import path from "path";
import { dirname } from "../app";
const router = express.Router();

router.get("/", async (req, res) => {
  const { fileName, width, height } = req.query;
  // console.log("fileName:", fileName);
  // console.log("width:", width);
  // console.log("height:", height);
  try {
    await sharp(path.join(dirname, `/assets/images/${fileName}.jpg`))
      .resize(parseInt(width as string), parseInt(height as string))
      .toFile(
        path.join(dirname, `/assets/thumb/${fileName}_${width}_${height}.jpg`)
      );
    res.sendFile(`${fileName}_${width}_${height}.jpg`, {
      root: path.join(dirname, `/assets/thumb/`),
    });
  } catch (err) {
    res.send(
      "<h1>There was an error processing your image, Make sure that your image exists</h1>"
    );
  }
});

export default router;
