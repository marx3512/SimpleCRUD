import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import home from './src/routes/home';
import user from './src/routes/user';
import tokens from './src/routes/token';
import aluno from './src/routes/aluno';
import foto from './src/routes/foto';
import './src/database';

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
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
}

export default new App().app;
