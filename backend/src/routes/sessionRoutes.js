import express from "express"
import { Router } from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { createSession, endSession, getMyRecentSession, getSession, getSessionById, joinSession } from "../controllers/sessionController.js";

const router = express.Router();


router.post("/",protectRoute,createSession)

router.get("/active",protectRoute,getSession)

router.get ("/my-recent",protectRoute,getMyRecentSessions);

router.get("/:id",protectRoute,getSessionById)

router.post("/:id/join",protectRoute,joinSession)

router.post("/:id/end",protectRoute,endSession ) 



export default router