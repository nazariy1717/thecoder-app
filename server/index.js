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


app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

mongoose.connect('mongodb://localhost/coderDb', {
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(()=>console.log('mongodb connected'));

routes(router);
app.use('/api', router);


app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Running on localhost' + port));