import express from "express";
import path from "path";
import processImage from "../utilities/processImage";
const router = express.Router();

router.get("/", async (req, res): Promise<void> => {
  const { fileName, width, height } = req.query;

  // console.log("fileName:", fileName);
  // console.log("width:", width);
  // console.log("height:", height);

  if (parseInt(width as string) <= 0 || parseInt(height as string) <= 0) {
    res.send("<h1>width and height must be bigger than zero</h1>");
    return;
  }
  try {
    await processImage(
      fileName as string,
      parseInt(width as string),
      parseInt(height as string)
    );
    res.sendFile(`${fileName}_${width}_${height}.jpg`, {
      root: path.join(__dirname, `../../assets/thumb/`),
    });
  } catch (err) {
    // console.log("err:", err);
    res.send(
      "<h1>There was an error processing your image, Make sure that your image exists</h1>"
    );
  }
});

export default router;
