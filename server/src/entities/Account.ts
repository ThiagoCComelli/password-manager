import { ObjectId } from "mongodb"
import { uuid } from "uuidv4"

export class Account {
    public readonly _id: string

    public name: string
    public password: string
    public email: string
    public domain: string
    
    constructor(props: Omit<Account, '_id'>, _id?: ObjectId) {
        Object.assign(this, props)

        // if (!_id) {
        //     this._id = uuid()
        // }
    }
}