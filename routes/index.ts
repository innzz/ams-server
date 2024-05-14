import express from "express";
import clockRoutes from "./clockRoutes"
import uploadRoutes from "./uploadRoutes"

const router = express.Router();

router.use("/clock", clockRoutes);
router.use("/upload", uploadRoutes);

export default router