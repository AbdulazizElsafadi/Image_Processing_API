import fs from "fs";
import path from "path";

export default (fileName: string, width: number, height: number): boolean => {
  return fs.existsSync(
    path.join(
      __dirname,
      `../../assets/thumb/${fileName}_${width}_${height}.jpg`
    )
  );
};
