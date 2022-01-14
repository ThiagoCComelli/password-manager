import { Account } from "../entities/Account";

export interface IAccountsRepository {
    findAccountByEmail(email: string): Promise<boolean>
    createNewAccount(account: Account): Promise<void>
}