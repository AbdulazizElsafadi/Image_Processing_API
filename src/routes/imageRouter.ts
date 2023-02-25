import express from "express";
import path from "path";
import { dirname } from "../app";
import processImage from "../../utilities/processImage";
const router = express.Router();

router.get("/", async (req, res) => {
  const { fileName, width, height } = req.query;

  try {
    await processImage(
      fileName as string,
      parseInt(width as string),
      parseInt(height as string)
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
