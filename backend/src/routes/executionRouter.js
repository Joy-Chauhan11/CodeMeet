import express from "express";
import { executeCode, judgeCode } from "../controllers/executionController.js";

const router = express.Router();

router.post("/execute", executeCode);
router.post("/judge", judgeCode);

export default router;