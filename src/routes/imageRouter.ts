import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const { fileName, width, height } = req.query;
  res.send(
    `The fileName is ${req.query.fileName}, width: ${req.query.width} and height: ${req.query.height}`
  );
});

export default router;
