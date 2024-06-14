import { db } from '../db.js';

export const register = (req, res) => {
  const { nome, email, fone, data_nascimento, senha } = req.body;

  const q = `INSERT INTO usuarios (nome, email, fone, data_nascimento, senha) VALUES (?, ?, ?, ?, ?)`;
  const values = [nome, email, fone, data_nascimento, senha];

  db.run(q, values, function (err) {
    if (err) return res.status(500).json(err);
    return res.status(201).json({ id: this.lastID, ...req.body, senha: undefined });
  });
};

export const login = (req, res) => {
  const { email, senha } = req.body;
  const q = 'SELECT * FROM usuarios WHERE email = ?';

  db.get(q, [email], (err, user) => {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

    if (user.senha !== senha) return res.status(401).json({ error: 'Senha incorreta' });

    return res.status(200).json({ id: user.id });
  });
};
