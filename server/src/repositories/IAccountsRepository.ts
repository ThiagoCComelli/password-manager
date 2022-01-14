import { Account } from "../entities/Account";

export interface IAccountsRepository {
    findByNameAndEmail(name: string, email: string): Promise<boolean>
    save(account: Account): Promise<void>
    getAccounts(): Promise<Account[]>
    // startDB(): Promise<boolean>
}