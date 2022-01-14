import { request, response, Router } from "express";
import { IAnalyzeIP } from "./middlewares/IAnalyzeIP";
import { createCellController } from "./useCases/createCell";
import { createAccountController } from "./useCases/createAccount";
import { getCellsController } from "./useCases/getCells";

const router = Router()

router.post("/", IAnalyzeIP, (request, response) => {
    return createCellController.handle(request, response)
})

router.get("/", IAnalyzeIP, (request, response) => {
    return getCellsController.handle(request, response)
})

router.post("/register", IAnalyzeIP, (request, response) => {
    return createAccountController.handle(request, response)
})

export { router }