import express from "express";
import router from "./routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3000, () => {
  console.log("Server is running");
});

export default app;
