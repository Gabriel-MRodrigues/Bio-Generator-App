import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bioRoutes from './routes/bioRoutes.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Route
app.use('/generate-bio', bioRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
