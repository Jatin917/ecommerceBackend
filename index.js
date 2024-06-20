import express from 'express';
import dotenv from 'dotenv';
import Connection from './Database/db.js';
import DefaultData from './Default/default.js';
import cors from 'cors';
import router from './Router/route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);
DefaultData();
