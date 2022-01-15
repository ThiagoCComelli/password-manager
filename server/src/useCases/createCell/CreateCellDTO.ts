import { ObjectId } from "mongodb";

export interface ICreateCellRequestDTO {
    _id?: ObjectId
    name: string
    domain: string
    email: string
    password: string
}