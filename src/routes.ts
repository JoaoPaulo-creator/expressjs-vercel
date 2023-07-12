import { Router } from "express";

const router = Router();

router.get("/teste", (req, res) => {
  return res.json({ message: "Hello World!" });
});

export default router;
