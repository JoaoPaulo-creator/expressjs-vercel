import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.redirect("/teste");
});

router.get("/teste", (req, res) => {
  return res.json({ message: "Hello World!" });
});

export default router;
