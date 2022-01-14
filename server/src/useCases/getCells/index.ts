import { MongoDBCellsRepository } from "../../repositories/implementations/MongoDBCellsRepository";
import { GetCellsUseCase } from "./GetCells";
import { GetCellsController } from "./GetCellsController";

const mongoDBCellsRepository = new MongoDBCellsRepository()

const getCellsUseCase = new GetCellsUseCase(
    mongoDBCellsRepository
)

const getCellsController = new GetCellsController(
    getCellsUseCase
)

export {getCellsUseCase,getCellsController}