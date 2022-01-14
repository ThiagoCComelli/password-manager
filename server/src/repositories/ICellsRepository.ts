import { Cell } from "../entities/Cell";

export interface ICellsRepository {
    findByNameAndEmail(name: string, email: string): Promise<boolean>
    save(cell: Cell): Promise<void>
    getCells(): Promise<Cell[]>
}