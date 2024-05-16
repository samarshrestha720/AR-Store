import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.send("Hello World From TS2!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
