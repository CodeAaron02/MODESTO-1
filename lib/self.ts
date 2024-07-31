import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { db } from "./db";

export const getSelf = async () => {
  try {
    const token = cookies().get("token")?.value || "";

    const { id } = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  } catch {
    return null;
  }
};
