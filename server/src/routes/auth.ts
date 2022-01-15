import { Router } from "express";
import { authenticationVerify } from "../middlewares/IAnalyzeIP";
import { createAccountController } from "../useCases/createAccount";
import { loginAccountController } from "../useCases/loginAccount";

const authRouter = Router()

authRouter.post("/register", (request, response) => {
    return createAccountController.handle(request, response)
})

authRouter.get("/login", (request, response) => {
    return loginAccountController.handle(request, response)
})

authRouter.get("/auth", authenticationVerify, (request, reponse) => {
    
})

export { authRouter }