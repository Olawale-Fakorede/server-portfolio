import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";



const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())






const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {console.log(`App listening on ${port}`)})
        console.log("Connected to MongoDB succesfully")
    })
    .catch((error) => {
        console.log(error.message)
    });