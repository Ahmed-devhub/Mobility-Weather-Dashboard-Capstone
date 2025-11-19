import express from 'express'
import 'dotenv/config'
import dataRoutes from "./routes/dataRoutes.js";

const app = express()
const port = process.env.PORT || 3000

app.use('/api',dataRoutes);

app.listen(port,()=>{console.log(`Server running on Port: ${port}`)})
