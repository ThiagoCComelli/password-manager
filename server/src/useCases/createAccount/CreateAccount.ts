import { Account } from "../../entities/Account";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { ICreateAccountRequestDTO } from "./CreateAccountDTO";

export class CreateAccountUseCase {
    
    constructor(
        private accountsRepository: IAccountsRepository
    ) {}
    
    async execute(data: ICreateAccountRequestDTO) {
        const accountAlreadyExist = await this.accountsRepository.findByNameAndEmail(data.name,data.email)
    
        if (accountAlreadyExist) {
            throw new Error("Account already exists.")
        }

        const account = new Account(data)

        await this.accountsRepository.save(account)
    }
}