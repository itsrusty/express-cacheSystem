import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routerCache from "./routes/routerData.js"
import colors from "colors"

const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use(routerCache)

app.listen(PORT)