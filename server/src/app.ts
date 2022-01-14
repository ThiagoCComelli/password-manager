import express from 'express'
import { MongoDBAccountsRepository } from './repositories/implementations/MongoDBAccountsRepository'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

MongoDBAccountsRepository.startDB()

export {app}