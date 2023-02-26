import express from "express";
import path from "path";
import { Request, Response } from "express";

import isFileExist from "../utilities/isFileExist";
import processImage from "../utilities/processImage";
const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  const { fileName, width, height } = req.query;

  // console.log("fileName:", fileName);
  // console.log("width:", width);
  // console.log("height:", height);

  if (!fileName || !width || !height) {
    res.send(
      "<h1>Either the fileName or the width or the height is missing,<br/> please insure to provide all needed data</h1>"
    );
    return;
  }
  if (!parseInt(width as string) || !parseInt(height as string)) {
    res.send("<h1>Width and Height must be numbers!</h1>");
    return;
  }
  if (parseInt(width as string) <= 0 || parseInt(height as string) <= 0) {
    res.send("<h1>width and height must be bigger than zero</h1>");
    return;
  }
  // console.log(
  //   "isFileExist:",
  //   isFileExist(
  //     fileName as string,
  //     parseInt(width as string),
  //     parseInt(height as string)
  //   )
  // );

  if (
    isFileExist(
      fileName as string,
      parseInt(width as string),
      parseInt(height as string)
    )
  ) {
    // console.log("Existing File is sent");
    res.sendFile(`${fileName}_${width}_${height}.jpg`, {
      root: path.join(__dirname, `../../assets/thumb/`),
    });
    return;
  } else {
    try {
      await processImage(
        fileName as string,
        parseInt(width as string),
        parseInt(height as string)
      );
      // console.log("New File is created");
      res.sendFile(`${fileName}_${width}_${height}.jpg`, {
        root: path.join(__dirname, `../../assets/thumb/`),
      });
    } catch (err) {
      // console.log("err:", err);
      res.send(
        "<h1>Your File doesn't exist!! Make sure you included the right file</h1>"
      );
    }
  }
});

export default router;
