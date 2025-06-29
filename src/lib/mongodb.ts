import { Db, MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGO_URI;
const MONGODB_DB_API = process.env.MONGO_DB_API;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    if (!MONGODB_URI) {
        throw new Error("Define the MONGODB_URI environmental variable");
    }
    if (!MONGODB_DB_API) {
        throw new Error("Define the MONGODB_DB environmental variable");
    }
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db(MONGODB_DB_API);
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}