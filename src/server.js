import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';

import routes from './routes.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());
app.use('/api', routes);
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const { connection } = mongoose;

connection.once('open', (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Conexão com banco de dados realizada');
  }
});

app.listen(process.env.PORT || 8080, () => console.log('Server iniciado'));
