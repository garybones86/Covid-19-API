import { Router } from "express";

import CountryRoutes from "./covid.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/covid", CountryRoutes);

export default router;
