import { connectToDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const {db} = await connectToDatabase();
        const res = await db.collection("blogs_meta").find().toArray();
        if (!res || res.length === 0) {
            console.error("No blogs found in the database.");
            return NextResponse.json({ error: "No blogs found" }, { status: 404 });
        }
        return NextResponse.json(res);
    } catch (error) {
        console.error("Error fetching blog metadata:", error);
        return NextResponse.json({ error: "Failed to fetch blog metadata" }, { status: 500 });
    }
}