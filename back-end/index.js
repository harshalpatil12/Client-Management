import express, { request, response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

import route from './route/routes.js'

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors());
app.use('/users', route);

const PORT = 8000;
const URL = 'mongodb+srv://Harshal17771:Harshal@cluster0.ietj7.mongodb.net/assessment?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running successfully on port ${PORT}`);
    });
}).catch(error => {
    console.log('Error: ', error.message);
})
