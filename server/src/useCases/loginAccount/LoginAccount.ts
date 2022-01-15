import { newAuthToken } from "../../middlewares/IAnalyzeIP";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { ILoginAccountRequestDTO } from "./LoginAccountDTO";


export class LoginAccountUseCase {
    
    constructor (
        private loginAccount: IAccountsRepository
    ) {}

    async execute(data: ILoginAccountRequestDTO) {
        const accountAlreadyExist = await this.loginAccount.findAccountByEmailAndLogin(data)
        let authToken: string

        if (accountAlreadyExist) {
            authToken = newAuthToken(accountAlreadyExist.email)
        }

        delete accountAlreadyExist["password"]

        return {account:accountAlreadyExist,authToken}
    }
}