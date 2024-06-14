import express from 'express';
import { getProfile, addAnimal, getUserAnimals, getAnimalById, deleteAnimalById, updateAnimalById, getAllAnimals } from '../controllers/userController.js';
const router = express.Router();

router.get('/profile/:userId', getProfile);
router.post('/animals/:userId', addAnimal);
router.get('/animals/:userId', getUserAnimals);
router.get('/animals/:id', getAnimalById);
router.get('/api/animals/:id', getAnimalById);
router.delete('/api/animals/:id', deleteAnimalById);
router.put('/api/animals/:id', updateAnimalById);
router.get('/animals', getAllAnimals);



export default router;