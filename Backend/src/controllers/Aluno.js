import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoC {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });

    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(401).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não encontrado'],
        });
      }

      return res.status(400).json(aluno);
    } catch (e) {
      return res.status(401).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não encontrado'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.status(400).json(alunoAtualizado);
    } catch (e) {
      return res.status(401).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não encontrado'],
        });
      }

      await aluno.destroy();

      return res.status(400).json({
        apagado: true,
      });
    } catch (e) {
      return res.status(401).json({
        error: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoC();
