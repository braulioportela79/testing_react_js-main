import express, { json } from 'express'
import { routes } from './Routes/routes'

const cors = require("cors");
const app = express()
const PORT = 4000
app.use(json())
app.use(routes)
app.use(cors());
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`))