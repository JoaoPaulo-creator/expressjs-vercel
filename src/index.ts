import express from "express";

const app = express();

app.get("/teste", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server is running");
});
