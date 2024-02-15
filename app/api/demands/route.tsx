import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = await client.db("TECHSRV");

  const demands = await db.collection("DEMANDS").find({}).sort({}).toArray();
  return new Response(JSON.stringify(demands));
}
