import { projectAuth } from "@/firebase/config";
import { defineAction } from "astro:actions";
// import { z } from 'astro:schema';

export const logoutAccount = defineAction({
  handler: async () => {
    await projectAuth.signOut();
  },
});
