import express from "express";
import imageRouter from "./routes/imageRouter";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/image");
});

app.use("/image", imageRouter);

app.listen(3000, () => {
  console.log("listening on PORT 3000");
});
export default app;
