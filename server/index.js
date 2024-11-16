import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import animalRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(animalRoutes);


app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.listen(8800, () => {
  console.log('Servidor rodando na porta 8800');
});