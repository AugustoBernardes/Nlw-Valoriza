import { Request,Response, NextFunction } from "express";
import bodyParser from "body-parser";
import express from "express"
import "express-async-errors" 
import "reflect-metadata";

import { userRouter } from "./routes/userRoutes"
import { tagRouter } from "./routes/tagsRoute"
import { complimentsRouter } from "./routes/complimentRoute"

require('dotenv').config()

// Importing Data Base
import "./database"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/users',userRouter)
app.use('/tags',tagRouter)
app.use('/compliments',complimentsRouter)

// Treating global error
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

