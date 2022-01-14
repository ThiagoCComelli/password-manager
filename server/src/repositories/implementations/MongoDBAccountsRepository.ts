import { IAccountsRepository } from "../IAccountsRepository";
import { Account } from "../../entities/Account";
import { MongoClient } from "mongodb";
import { IGetAccountRequestDTO } from "../../useCases/getAccounts/GetAccountsDTO";

export class MongoDBAccountsRepository implements IAccountsRepository {
    private accounts: Account[] = []
    static client: MongoClient

    static async startDB(): Promise<boolean> {
        this.client = new MongoClient(process.env.DB_CONN_STRING)
        await this.client.connect()
        return true

    }

    async findByNameAndEmail(name: string, email: string): Promise<boolean> {
        // @ts-ignore
        const account: IGetAccountRequestDTO = await MongoDBAccountsRepository.client.db().collection(process.env.DB_COLLECTION_NAME).findOne(
            {"name": name, "email": email}
        )

        if (account) {
            return true
        }
        return false

    }
    
    async save(account: Account): Promise<void> {
        // @ts-ignore
        const result = await MongoDBAccountsRepository.client.db().collection(process.env.DB_COLLECTION_NAME).insertOne(account)
        console.groupCollapsed(result)
    }

    async getAccounts(): Promise<Account[]> {
        return this.accounts
    }
}