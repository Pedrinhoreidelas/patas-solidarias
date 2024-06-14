import { db } from '../db.js';

export const getProfile = (req, res) => {
  const userId = req.params.userId;
  const q = 'SELECT * FROM usuarios WHERE id = ?';
  db.get(q, [userId], (err, user) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(user);
  });
};

export const addAnimal = (req, res) => {
  const { nome, tipo, sexo, raca, tamanho, comportamento, idade, nomedono, telldono, local, descricao } = req.body;
  const userId = req.params.userId;
  const q = 'INSERT INTO animais (nome, tipo, sexo, raca, tamanho, comportamento, idade, nomedono, telldono, local, descricao, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [nome, tipo, sexo, raca, tamanho, comportamento, idade, nomedono, telldono, local, descricao, userId];

  db.run(q, values, function (err) {
    if (err) return res.status(500).json(err);
    return res.status(201).json({ id: this.lastID, ...req.body });
  });
};

export const getUserAnimals = (req, res) => {
  const userId = req.params.userId;
  const q = 'SELECT * FROM animais WHERE usuario_id = ?';
  db.all(q, [userId], (err, rows) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(rows);
  });
};

export const getAnimalById = (req, res) => {
  const animalId = req.params.id;
  const q = 'SELECT * FROM animais WHERE id = ?';
  db.get(q, [animalId], (err, row) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(row);
  });
};

export const getAllAnimals = (req, res) => {
  const q = 'SELECT * FROM animais';
  db.all(q, [], (err, rows) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(rows);
  });
};

export const deleteAnimalById = (req, res) => {
  const animalId = req.params.id;
  const q = 'DELETE FROM animais WHERE id = ?';
  db.run(q, [animalId], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao deletar o animal' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Animal não encontrado' });
    }
    res.status(200).json({ message: 'Animal deletado com sucesso' });
  });
};

export const updateAnimalById = (req, res) => {
  const animalId = req.params.id;
  const { nome, tipo, raca, idade, sexo, tamanho, comportamento, nomedono, telldono, local, descricao } = req.body;
  const q = 'UPDATE animais SET nome = ?, tipo = ?, raca = ?, idade = ?, sexo = ?, tamanho = ?, comportamento = ?, nomedono = ?, telldono = ?, local = ?, descricao = ? WHERE id = ?';
  const values = [nome, tipo, raca, idade, sexo, tamanho, comportamento, nomedono, telldono, local, descricao, animalId];

  db.run(q, values, function(err) {
    if (err) {
      return res.status(500).json({ error: 'Erro ao atualizar o animal' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Animal não encontrado' });
    }
    res.status(200).json({ message: 'Animal atualizado com sucesso' });
  });
};