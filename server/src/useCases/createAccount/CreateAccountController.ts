import { Request, Response } from "express";
import { CreateAccountUseCase } from "./CreateAccount";

export class CreateAccountController {

    constructor(
        private createAccountUseCase: CreateAccountUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, domain, password} = request.body

        try {
            await this.createAccountUseCase.execute({
                name,
                domain,
                email,
                password
            })

            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}