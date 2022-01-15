import { Router } from "express";
import { authenticationVerify } from "../middlewares/IAnalyzeIP";
import { createCellController } from "../useCases/createCell";
import { getCellsController } from "../useCases/getCells";

const cellsRouter = Router()

cellsRouter.post("/new-cell", authenticationVerify, (request, response) => {
    return createCellController.handle(request, response)
})

cellsRouter.get("/get-cells", authenticationVerify, (request, response) => {
    return getCellsController.handle(request, response)
})

export { cellsRouter }