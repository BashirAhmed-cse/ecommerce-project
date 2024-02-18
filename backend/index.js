/// packages

import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

//utiles

import connectDb from "./utils/db.js";


dotenv.config();

const port = process.env.port || 5000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hellow world");
});

app.listen(port, () => console.log(`Server running on port: ${port}`));