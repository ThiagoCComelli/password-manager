import { MongoDBAccountsRepository } from "../../repositories/implementations/MongoDBAccountsRepository";
import { LoginAccountUseCase } from "./LoginAccount";
import { LoginAccountController } from "./LoginAccountController";

const mongoDBAccountsRepository = new MongoDBAccountsRepository()

const loginAccountUseCase = new LoginAccountUseCase(
    mongoDBAccountsRepository
)

const loginAccountController = new LoginAccountController(
    loginAccountUseCase
)

export {loginAccountController, loginAccountUseCase}