import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = await client.db("TECHSRV");

  const techguys = await db
    .collection("USERS")
    .find({ status: "tech guy" })
    .sort({})
    .toArray();
  return new Response(JSON.stringify(techguys));
}
