import express from "express"
import { Router } from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { aiReview } from "../controllers/aiController.js";

const router = express.Router();

router.post("/review",protectRoute,aiReview);

export default router ;