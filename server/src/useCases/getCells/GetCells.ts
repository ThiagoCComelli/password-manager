import { ICellsRepository } from "../../repositories/ICellsRepository";

export class GetCellsUseCase {
    constructor (
        private cellsRepository: ICellsRepository
    ) {}

    async execute() {
        const cells = await this.cellsRepository.getCells()

        return cells
    }
}