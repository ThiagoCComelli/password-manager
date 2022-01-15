import { ICellsRepository } from "../ICellsRepository";
import { Cell } from "../../entities/Cell";
import { IGetCellRequestDTO } from "../../useCases/getCells/GetCellsDTO";
import { MongoDBRepository } from "./MongoDBRepository";

export class MongoDBCellsRepository implements ICellsRepository {

    async findByNameAndEmail(name: string, email: string): Promise<boolean> {
        // @ts-ignore
        const cell: IGetCellRequestDTO = await MongoDBRepository.client.db().collection(process.env.DB_COLLECTION_CELLS).findOne(
            {"name": name, "email": email}
        )

        if (cell) {
            return true
        }
        return false

    }
    
    async save(cell: Cell): Promise<void> {
        // @ts-ignore
        const result = await MongoDBRepository.client.db().collection(process.env.DB_COLLECTION_CELLS).insertOne(cell)
    }

    async getCells(): Promise<Cell[]> {
        // @ts-ignore
        const result: IGetCellRequestDTO[] = await MongoDBRepository.client.db().collection(process.env.DB_COLLECTION_CELLS).find().toArray()

        return result.map(x => new Cell(x))
    }
}