"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { GetVerificationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingTokne = await GetVerificationTokenByToken(token);

  if (!existingTokne) {
    return { error: "Token does not exsist!" };
  }

  const hasExpired = new Date(existingTokne.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has exparied!" };
  }

  const existingUser = await getUserByEmail(existingTokne.email);

  if (!existingUser) {
    return { error: "Email does not exsist!" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingTokne.email },
  });

  await db.verificationToken.delete({
    where: { id: existingTokne.id },
  });

  return { successs: "Email verified" };
};
