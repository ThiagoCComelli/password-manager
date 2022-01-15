import { MongoClient } from "mongodb"

export class MongoDBRepository {
    static client: MongoClient

    static async startDB(): Promise<boolean> {
        this.client = new MongoClient(process.env.DB_CONN_STRING)
        await this.client.connect()
        console.log("MongoDB connected!")
        return true
    }
}