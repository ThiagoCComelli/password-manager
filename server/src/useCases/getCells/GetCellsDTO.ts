import { ObjectId } from "mongodb";

export interface IGetCellRequestDTO {
    _id?: ObjectId
    name: string
    domain: string
    email: string
    password: string
}