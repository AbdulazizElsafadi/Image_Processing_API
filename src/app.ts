import express from "express";
import imageRouter from "./routes/imageRouter";

const app = express();
// console.log("_dirname:", __dirname);
// express.static(path.join(__dirname, "/assets"));

export const dirname = __dirname;

app.get("/", (req, res) => {
  res.redirect("/image");
});

app.use("/image", imageRouter);

app.listen(3000, () => {
  console.log("listening on PORT 3000");
});
export default app;
