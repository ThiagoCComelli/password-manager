import { Account } from "../entities/Account";
import { ILoginccountRequestDTO } from "../useCases/loginAccount/LoginAccountDTO";

export interface IAccountsRepository {
    findAccountByEmail(email: string): Promise<boolean>
    createNewAccount(account: Account): Promise<void>

    findAccountByEmailAndLogin(data: ILoginccountRequestDTO): Promise<Account>
}