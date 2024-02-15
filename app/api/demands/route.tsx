import clientPromise from "@/lib/mongodb";
import { NextRequest } from "@/node_modules/next/server";

export async function GET() {
  const client = await clientPromise;
  const db = await client.db("TECHSRV");

  const demands = await db.collection("DEMANDS").find({}).sort({}).toArray();
  return new Response(JSON.stringify(demands));
}

export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const db = await client.db("TECHSRV");

  const body = await req.json();

  const newDemand = await db.collection("DEMANDS").insertOne(body);
  return new Response(JSON.stringify(newDemand));
}
