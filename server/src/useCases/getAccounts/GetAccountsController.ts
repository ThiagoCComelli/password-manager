import { Request, Response } from "express";
import { GetAccountsUseCase } from "./GetAccounts"

export class GetAccountsController {
    constructor (
        private getAccountsUseCase: GetAccountsUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const accounts = await this.getAccountsUseCase.execute()

            console.log(accounts)

            return response.status(200).json(accounts)
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}