import express from 'express'
import { authRouter } from './routes/auth'
import { cellsRouter } from './routes/cells'
import { MongoDBRepository } from './repositories/implementations/MongoDBRepository'

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use("/cells", cellsRouter)

MongoDBRepository.startDB()

export {app}