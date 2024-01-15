import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";

export type ExtendendUser = DefaultSession["user"] & { role: UserRole };

declare module "next-auth" {
  interface Session {
    /** The user's postal address. */
    user: ExtendendUser;
  }
}
