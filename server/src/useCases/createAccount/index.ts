import { MongoDBAccountsRepository } from "../../repositories/implementations/MongoDBAccountsRepository";
import { CreateAccountUseCase } from "./CreateAccount";
import { CreateAccountController } from "./CreateAccountController";

const mongoDBAccountsRepository = new MongoDBAccountsRepository()

const createAccountUseCase = new CreateAccountUseCase(
    mongoDBAccountsRepository
)

const createAccountController = new CreateAccountController(
    createAccountUseCase
)

export {createAccountUseCase, createAccountController}