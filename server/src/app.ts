import express from 'express'
import { MongoDBCellsRepository } from './repositories/implementations/MongoDBCellsRepository'
import { MongoDBAccountsRepository } from './repositories/implementations/MongoDBAccountsRepository'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

MongoDBCellsRepository.startDB()
MongoDBAccountsRepository.startDB()

export {app}