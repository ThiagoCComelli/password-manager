import { ICellsRepository } from "../ICellsRepository";
import { Cell } from "../../entities/Cell";
import { MongoClient } from "mongodb";
import { IGetCellRequestDTO } from "../../useCases/getCells/GetCellsDTO";

export class MongoDBCellsRepository implements ICellsRepository {
    static client: MongoClient

    static async startDB(): Promise<boolean> {
        this.client = new MongoClient(process.env.DB_CONN_STRING)
        await this.client.connect()
        console.log("MongoDB connected! CELLS")
        return true
    }

    async findByNameAndEmail(name: string, email: string): Promise<boolean> {
        // @ts-ignore
        const cell: IGetCellRequestDTO = await MongoDBCellsRepository.client.db().collection(process.env.DB_COLLECTION_NAME).findOne(
            {"name": name, "email": email}
        )

        if (cell) {
            return true
        }
        return false

    }
    
    async save(cell: Cell): Promise<void> {
        // @ts-ignore
        const result = await MongoDBCellsRepository.client.db().collection(process.env.DB_COLLECTION_NAME).insertOne(cell)
        console.groupCollapsed(result)
    }

    async getCells(): Promise<Cell[]> {
        // @ts-ignore
        const result: IGetCellRequestDTO[] = await MongoDBCellsRepository.client.db().collection(process.env.DB_COLLECTION_NAME).find().toArray()

        return result.map(x => new Cell(x))
    }
}