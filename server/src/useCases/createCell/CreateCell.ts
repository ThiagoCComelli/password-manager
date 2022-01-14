import { Cell } from "../../entities/Cell";
import { ICellsRepository } from "../../repositories/ICellsRepository";
import { ICreateCellRequestDTO } from "./CreateCellDTO";

export class CreateCellUseCase {
    
    constructor(
        private ICellsRepository: ICellsRepository
    ) {}
    
    async execute(data: ICreateCellRequestDTO) {
        const cellAlreadyExist = await this.ICellsRepository.findByNameAndEmail(data.name,data.email)
    
        if (cellAlreadyExist) {
            throw new Error("Cell already exists.")
        }

        const cell = new Cell(data)

        await this.ICellsRepository.save(cell)
    }
}