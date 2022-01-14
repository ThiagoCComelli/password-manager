import { NextFunction, Request, Response } from "express";
import { getClientIp } from "request-ip";

const IAnalyzeIP = (request: Request, response: Response, next: NextFunction) => {
    const requestIp = getClientIp(request)

    if (process.env.SERVER_IP_ACCEPTED.includes(requestIp)) {
        next()
    } else {
        response.status(400).json({
            message: "Unauthorized access."
        })
    }
}

export { IAnalyzeIP }