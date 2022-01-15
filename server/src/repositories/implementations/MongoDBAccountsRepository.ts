import { IAccountsRepository } from "../IAccountsRepository";
import { MongoDBRepository } from "./MongoDBRepository";
import { Account } from "../../entities/Account";
import { ILoginAccountRequestDTO } from "../../useCases/loginAccount/LoginAccountDTO";

export class MongoDBAccountsRepository implements IAccountsRepository {

    async findAccountByEmail(email: string): Promise<boolean> {
        // @ts-ignore
        const account: ICreateAccountRequestDTO = await MongoDBRepository.client.db().collection(process.env.DB_COLLECTION_ACCOUNTS).findOne(
            {"email": email}
        )
            
        if (account) {
            return true
        }
        return false
    }

    async createNewAccount(account: Account): Promise<void> {
        // @ts-ignore
        const result = await MongoDBRepository.client.db().collection(process.env.DB_COLLECTION_ACCOUNTS).insertOne(account)

    }

    async findAccountByEmailAndLogin(data: ILoginAccountRequestDTO): Promise<Account> {
        // @ts-ignore
        const result = await MongoDBRepository.client.db().collection(process.env.DB_COLLECTION_ACCOUNTS).findOne(data)
        
        // @ts-ignore
        const account = new Account(result)

        return account
    }
    
}