import { ObjectId } from "mongodb";

export interface IGetAccountRequestDTO {
    _id?: ObjectId
    name: string
    domain: string
    email: string
    password: string
}