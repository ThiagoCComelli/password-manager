import { Account } from "../../entities/Account";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { ICreateAccountRequestDTO } from "./CreateAccountDTO";

export class CreateAccountUseCase {
    constructor (
        private accountsRepository: IAccountsRepository
    ) {}

    async execute(data: ICreateAccountRequestDTO) {
        const accountAlreadyExist = await this.accountsRepository.findAccountByEmail(data.email)

        if (accountAlreadyExist) {
            throw new Error("Account Already exists.")
        }

        const account = new Account(data)

        await this.accountsRepository.createNewAccount(account)
    }
}