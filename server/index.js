import express from "express";
import path from "path";
import mongoose from 'mongoose';
import routes from './routes/';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = process.env.PORT;
const router = express.Router();
const url = process.env.MONGODB_URL;

try {
    mongoose.connect(url).then(()=>console.log('mongodb connected'));
} catch (error) {
    console.log(error);
}

routes(router);

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use('/api', router);



app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Running on localhost'));