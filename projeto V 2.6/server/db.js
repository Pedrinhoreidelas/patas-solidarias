import sqlite3 from 'sqlite3';
import { resolve } from 'path';

const dbPath = resolve('mydatabase.db');
export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    fone TEXT,
    data_nascimento DATE,
    senha TEXT
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS animais (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    tipo TEXT,
    sexo TEXT,
    raca TEXT,
    tamanho TEXT,
    comportamento TEXT,
    idade INTEGER,
    nomedono TEXT,
    telldono TEXT,
    local TEXT,
    descricao TEXT,
    usuario_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
  )`);
});