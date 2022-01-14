import { IAccountsRepository } from "../../repositories/IAccountsRepository";

export class GetAccountsUseCase {
    constructor (
        private accountsRepository: IAccountsRepository
    ) {}

    async execute() {
        const accounts = await this.accountsRepository.getAccounts()

        return accounts
    }
}