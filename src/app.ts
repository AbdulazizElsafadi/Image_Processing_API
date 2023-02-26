import express from "express";
import { Request, Response } from "express";
import imageRouter from "./routes/imageRouter";

const app = express();

app.get("/", (req: Request, res: Response): void => {
  res.redirect("/image");
});

app.use("/image", imageRouter);

app.get("/health/live", (req: Request, res: Response): void => {
  res.send("OK");
});

app.listen(3000, (): void => {
  console.log("listening on PORT 3000");
});
export default app;
