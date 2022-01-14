import { Request, Response } from "express";
import { CreateCellUseCase } from "./CreateCell";

export class CreateCellController {

    constructor(
        private createCellUseCase: CreateCellUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, domain, password} = request.body

        try {
            await this.createCellUseCase.execute({
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