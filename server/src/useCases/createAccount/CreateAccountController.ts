import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccount";

export class CreateAccountController {
    constructor (
        private createAccount: CreateAccountUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const result = await this.createAccount.execute(request.body)

            return response.status(200).json(result)
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}