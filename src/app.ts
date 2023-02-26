import express from "express";
import imageRouter from "./routes/imageRouter";

const app = express();

app.get("/", (req, res): void => {
  res.redirect("/image");
});

app.use("/image", imageRouter);

app.get("/health/live", (req, res): void => {
  res.send("The server is healthy");
});

app.listen(3000, (): void => {
  console.log("listening on PORT 3000");
});
export default app;
