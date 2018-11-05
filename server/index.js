import express from "express";
import path from "path";
import mongoose from 'mongoose';
import routes from './routes/';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import {PORT, MONGODB_URL} from './conf';

const app = express();
const port = PORT;
const router = express.Router();

app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(helmet());

mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(()=>console.log('mongodb connected'));

routes(router);
app.use('/api', router);


app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Running on localhost' + port));