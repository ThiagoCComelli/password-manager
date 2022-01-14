import { ObjectId } from "mongodb";

export interface ICreateCellRequestDTO {
    name: string
    domain: string
    email: string
    password: string
}