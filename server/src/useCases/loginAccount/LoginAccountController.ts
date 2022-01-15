import { Request, Response } from "express";
import { LoginAccountUseCase } from "./LoginAccount";

export class LoginAccountController {

    constructor (
        private loginAccountUseCase: LoginAccountUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const result = await this.loginAccountUseCase.execute({
                email: request.query.email.toString(),
                password: request.query.password.toString()
            })

            return response.status(200).json(result)
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    } 
}