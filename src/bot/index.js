import express from "express";
import mongoose from "mongoose";
import { config } from 'dotenv';
import telegramService from '../services/telegramService.js';

const app = express();
const PORT = 3000;

config({ path: './.env' });
const mongo = process.env.MONGO_DB;

mongoose
    .connect(mongo)
    .then(() => {
        console.log('DB connected')
    })
    .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
});

// ACTIVATE TELEGRAM BOT

const botToken = process.env.TELEGRAM_BOT_TOKEN;

telegramService(botToken);