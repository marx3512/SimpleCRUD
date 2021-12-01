import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import home from './src/routes/home';
import user from './src/routes/user';
import tokens from './src/routes/token';
import aluno from './src/routes/aluno';
import foto from './src/routes/foto';
import './src/database';

const whiteList = [
  'https://react2.marxborges.com.br',
  'https://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users/', user);
    this.app.use('/tokens/', tokens);
    this.app.use('/alunos/', aluno);
    this.app.use('/fotos/', foto);
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }
}

export default new App().app;
