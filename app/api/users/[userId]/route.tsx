import clientPromise from "@/lib/mongodb";
import { NextRequest } from "@/node_modules/next/server";

export async function GET(req: NextRequest, context: any) {
  const client = await clientPromise;
  const db = await client.db("TECHSRV");

  const { userId } = context.params;

  const techguys = await db
    .collection("USERS")
    .findOne({ $or: [{ uid: userId }, { email: userId }] });
  return new Response(JSON.stringify(techguys));
}
