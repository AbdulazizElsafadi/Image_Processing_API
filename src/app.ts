import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Worked");
});

app.listen(3000, () => {
  console.log("listening on PORT 3000");
});
export default app;
