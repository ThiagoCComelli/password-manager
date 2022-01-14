import { ObjectId } from "mongodb";

export interface ICreateAccountRequestDTO {
    _id?: ObjectId
    first_name: string
    last_name: string
    email: string
    password: string
}