const express = require("express")

require("dotenv").config({ path: "./config/config.env" })

const connect = require("./config/connectDB")
const storeRoute = require("./routes/store")

const app = express()

//middlewares
app.use(express.json())

//routes
app.use("/api/stores",storeRoute)

const PORT = process.env.PORT || 3210

app.listen(PORT,()=>{
    console.log(`server started at port:${PORT}`);
    connect()
})