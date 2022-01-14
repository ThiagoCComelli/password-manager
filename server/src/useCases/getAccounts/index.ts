import { MongoDBAccountsRepository } from "../../repositories/implementations/MongoDBAccountsRepository";
import { GetAccountsUseCase } from "./GetAccounts";
import { GetAccountsController } from "./GetAccountsController";

const mongoDBAccountsRepository = new MongoDBAccountsRepository()

const getAccountsUseCase = new GetAccountsUseCase(
    mongoDBAccountsRepository
)

const getAccountsController = new GetAccountsController(
    getAccountsUseCase
)

export {getAccountsUseCase,getAccountsController}