import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marx',
      sobrenome: 'Borges',
      email: 'marx.lupus@hotmail.com',
      idade: 22,
      peso: 100,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new Home();
