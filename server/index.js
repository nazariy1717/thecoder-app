import express from "express";
import path from "path";


const app = express();
const port = 8080;

// app.use('/api/admin-auth', auth);



app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('Running on localhost'));