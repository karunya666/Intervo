import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { upsertStreamUser, deleteStreamUser } from "./stream.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "intervo" });

const syncUser = inngest.createFunction(
  {
    id: "sync-user",
    triggers: { event: "clerk/user.created" },
  },
  async ({ event }) => {
    await connectDB();

    const {
      id,
      email_addresses,
      first_name,
      last_name,
      profile_image_url,
    } = event.data;

    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: profile_image_url,
    };

    await User.create(newUser);

    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      profileImage: newUser.profileImage,
    });
  }
);

const updateUser = inngest.createFunction(
  {
    id: "update-user",
    triggers: { event: "clerk/user.updated" },
  },
  async ({ event }) => {
    await connectDB();

    const {
      id,
      email_addresses,
      first_name,
      last_name,
      profile_image_url,
    } = event.data;

    const updatedUser = {
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      profileImage: profile_image_url,
    };

    await User.findOneAndUpdate(
      { clerkId: id },
      updatedUser,
      { new: true }
    );

    await upsertStreamUser({
      id: id.toString(),
      name: updatedUser.name,
      profileImage: updatedUser.profileImage,
    });
  }
);

const deleteUser = inngest.createFunction(
  {
    id: "delete-user",
    triggers: { event: "clerk/user.deleted" },
  },
  async ({ event }) => {
    await connectDB();

    const { id } = event.data;
    await User.deleteOne({ clerkId: id });

    await deleteStreamUser(id.toString()); 
  }
);

export const functions = [syncUser, updateUser, deleteUser];