import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    const {db} = await connectToDatabase();
    const res = await db.collection("blogs").find().toArray();
    return NextResponse.json(res);
}