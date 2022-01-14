import { MongoDBCellsRepository } from "../../repositories/implementations/MongoDBCellsRepository";
import { CreateCellUseCase } from "./CreateCell";
import { CreateCellController } from "./CreateCellController";

const mongoDBCellsRepository = new MongoDBCellsRepository()

const createCellUseCase = new CreateCellUseCase(
    mongoDBCellsRepository
)

const createCellController = new CreateCellController(
    createCellUseCase
)

export {createCellUseCase, createCellController}