import { db } from "@/lib/db";

export const GetVerificationTokenByEmail = async (email: string) => {
  try {
    const verifcationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    return verifcationToken;
  } catch {
    return null;
  }
};

export const GetVerificationTokenByToken = async (token: string) => {
  try {
    const verifcationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verifcationToken;
  } catch {
    return null;
  }
};
