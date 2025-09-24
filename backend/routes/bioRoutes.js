import express from 'express';
import { generateBio } from '../controllers/bioController.js';

const router = express.Router();

router.post('/', generateBio);

export default router;
