import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth-config";
import { prisma } from "./prisma";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      company: true,
      role: true,
      subscription: true,
      createdAt: true,
    },
  });

  return user;
}

export async function requireAuth() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}

export async function requireSubscription(
  minTier: "STARTER" | "PROFESSIONAL" | "ENTERPRISE",
) {
  const user = await requireAuth();

  const tierLevels = {
    FREE: 0,
    STARTER: 1,
    PROFESSIONAL: 2,
    ENTERPRISE: 3,
  };

  const userLevel = tierLevels[user.subscription as keyof typeof tierLevels];
  const requiredLevel = tierLevels[minTier];

  if (userLevel < requiredLevel) {
    throw new Error("Subscription upgrade required");
  }

  return user;
}
