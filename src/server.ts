import "reflect-metadata";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRoutes"
import express from "express"
require('dotenv').config()

import "./database"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users',userRouter)

app.listen(process.env.PORT, () => console.log(`Server is running on Port: ${process.env.PORT}!`))

