import { getAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

 let user = await User.findOne({
  clerkId: userId,
});


if (!user) {
const clerkUser = await clerkClient.users.getUser(userId);

  user = await User.create({
    clerkId: userId,
    email: clerkUser.emailAddresses[0]?.emailAddress,
    name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
    profileImage: clerkUser.imageUrl,
  });

  console.log("Mongo user created:", user);
}

req.user = user;
    next();
  } catch (err) {
    console.error("Protect Route Error:", err);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};