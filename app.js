import express from 'express';
import cors from "cors";
import session from "express-session";
import "dotenv/config";

const app = express()
app.use(
    cors({
        origin: process.env.FRONTEND_URL
    })
);
app.use(express.json());

// basic test call
app.get('/testresponse', (req, res) => {
    res.send("OK");
})

app.listen(process.env.PORT || 4000);