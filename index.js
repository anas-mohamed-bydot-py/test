import express from 'express'
import { db } from './db.js';
const app = express()
const port = process.env.port

await db()


app.get('/', (req, res, next) => {
    res.json({ msg: "hello from aws" });
})




app.listen(port, () => {
    console.log(`Server started on port`, Number(port));
});