import { ObjectId } from "mongodb"

export class Account {
    public readonly _id: string | ObjectId

    public first_name: string
    public last_name: string
    public password: string
    public email: string
    
    constructor(props: Omit<Account, '_id'>, _id?: ObjectId) {
        Object.assign(this, props)
    }
}