import { IAccountsRepository } from "../IAccountRepository";
import { MongoClient } from "mongodb";
import { Account } from "../../entities/Account";

export class MongoDBAccountsRepository implements IAccountsRepository {
    static client: MongoClient

    static async startDB(): Promise<boolean> {
        this.client = new MongoClient(process.env.DB_CONN_STRING)
        await this.client.connect()
        console.log("MongoDB connected! ACCOUNTS")
        return true
    }

    findAccountByEmail(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    createNewAccount(account: Account): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}