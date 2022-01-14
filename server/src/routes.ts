import { response, Router } from "express";
import { createAccountController } from "./useCases/createAccount";
import { getAccountsController } from "./useCases/getAccounts";

const router = Router()

router.post("/", (request, response) => {
    return createAccountController.handle(request, response)
})

router.get("/", (request, response) => {
    return getAccountsController.handle(request, response)
})

export { router }