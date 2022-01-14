import { Request, Response } from "express";
import { GetCellsUseCase } from "./GetCells"

export class GetCellsController {
    constructor (
        private getCellsUseCase: GetCellsUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            const cells = await this.getCellsUseCase.execute()

            return response.status(200).json(cells)
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            })
        }
    }
}