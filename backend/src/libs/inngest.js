import { Inngest } from "inngest";
import { connect_db } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "CodeMeet" });

const syncUser = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connect_db();

    const { id, email_addresses, first_name, last_name, image_url } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      profileImage: image_url,
    };

    await User.create(newUser);
  }
);

const deleteUserFromDb = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connect_db();

    const { id } = event.data;

    await User.deleteOne({ clerkId: id });
  }
);

export const functions = [syncUser, deleteUserFromDb];