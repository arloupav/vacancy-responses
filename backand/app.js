import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import vacanciesRouter from './routers/vacancies-router.js';

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/vacancies', vacanciesRouter);





