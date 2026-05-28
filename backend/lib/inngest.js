import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "intervo" });

const syncUser = inngest.createFunction(
    {id: "sync-user"},
    {event: "clerk.user.created"},
    async ({ event }) => {
        await connectDB();

        const {id, email_addresses, first_name, last_name, profile_image_url} = event.data;

        const newUser = {
            clerkId: id,
            email: email_addresses[0]?.email_address,
            name: `${first_name || ""} ${last_name || ""}`,
            profileImage: profile_image_url
        }

        await User.create(newUser);
    }
);

const updateUser = inngest.createFunction(
  { id: "update-user" },
  { event: "clerk.user.updated" },
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
  }
);

const deleteUser = inngest.createFunction(
    {id: "delete-user"},
    {event: "clerk.user.deleted"},
    async ({ event }) => {
        await connectDB();

        const {id} = event.data;
        await User.deleteOne({clerkId: id});
    }
);

export const functions = [syncUser, updateUser, deleteUser];