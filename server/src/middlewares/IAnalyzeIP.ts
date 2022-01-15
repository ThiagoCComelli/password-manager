import { NextFunction, Request, Response } from "express";
import { getClientIp } from "request-ip";
import jwt from "jsonwebtoken"

const authenticationVerify = (request: Request, response: Response, next: NextFunction) => {
    const requestIp = getClientIp(request)

    if (!process.env.SERVER_IP_ACCEPTED.includes(requestIp)) {
        response.status(400).json({
            message: "Unauthorized access. /0"
        })
    }

    const authorizationToken = request.headers.authorization?.split(" ")[1]

    if (verifyAuthToken(authorizationToken)) {
        next()
    } else {
        response.status(400).json({
            message: "Unauthorized access. /1"
        })
    }
}

const verifyAuthToken = (token: string) => {
    const isValidToken = jwt.verify(token, process.env.SERVER_AUTH_SECRET)

    return isValidToken
}

const newAuthToken = (email: string) => {
    const token = jwt.sign(
        {email: email}, 
        process.env.SERVER_AUTH_SECRET,
        {
            expiresIn: "24h"
        }
    )

    return token
}

export { authenticationVerify,verifyAuthToken,newAuthToken }