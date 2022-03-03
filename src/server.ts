import { Request,Response, NextFunction } from "express";
import bodyParser from "body-parser";
import "express-async-errors" 
import express from "express"
import "reflect-metadata";

import { userRouter } from "./routes/userRoutes"
import { tagRouter } from "./routes/tagsRoute"

require('dotenv').config()

// Importing Data Base
import "./database"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/users',userRouter)
app.use('/tags',tagRouter)

// Treating global errors
app.use((error:Error, req:Request, res:Response, next:NextFunction) => {
    if(error instanceof Error){
        return (
            res.status(400),
            res.json({
                status:400,
                error:error.message
            })
        )
    }

    return (
        res.status(500),
        res.json({
            status:500,
            error: "Internal Server Error",
        })
    )

})

// Running server
app.listen(process.env.PORT, () => console.log(`Server is running on Port: ${process.env.PORT}!`))

