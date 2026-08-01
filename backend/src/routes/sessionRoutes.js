import express from "express"
import { Router } from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { createSession, endSession, getMyRecentSessions, getSession, getSessionByRoomId, joinSession } from "../controllers/sessionController.js";

const router = express.Router();


router.post("/",protectRoute,createSession)

router.get("/test", (req, res) => {
  res.send("Session Router Working");
});

router.get("/active",protectRoute,getSession)

router.get ("/my-recent",protectRoute,getMyRecentSessions);

router.get("/:roomId",protectRoute,getSessionByRoomId)

router.post("/:roomId/join",protectRoute,joinSession)

router.post("/:roomId/end",protectRoute,endSession ) 



export default router