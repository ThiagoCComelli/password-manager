import { ObjectId } from "mongodb"

export class Cell {
    public readonly _id: string

    public name: string
    public password: string
    public email: string
    public domain: string
    
    constructor(props: Omit<Cell, '_id'>, _id?: ObjectId) {
        Object.assign(this, props)
    }
}