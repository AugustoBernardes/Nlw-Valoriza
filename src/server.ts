import "reflect-metadata";
import express from "express"
require('dotenv').config()

import "./database"

const app = express();

app.listen(3000, () => console.log("Server is running!"))

