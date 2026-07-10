import { clerkMiddleware, getAuth } from "@clerk/express";
  import User from "../models/User";

  
export const protectRoute = [
  async (req, res, next) => {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    req.user = user;
    next();
  },
];