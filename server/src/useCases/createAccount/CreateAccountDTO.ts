import { ObjectId } from "mongodb";

export interface ICreateAccountRequestDTO {
    _id?: ObjectId
    name: string
    domain: string
    email: string
    password: string
}