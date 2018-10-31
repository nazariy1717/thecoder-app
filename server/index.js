import express from "express";
import path from "path";
import mongoose from 'mongoose';
import routes from './routes/';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express();
const port = 8080;
const router = express.Router();

// app.use('/api/admin-auth', auth);



app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Running on localhost'));