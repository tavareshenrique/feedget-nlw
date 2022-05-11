import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const PORT = 3333;

const app = express();

app.use(cors())

app.use(express.json({ limit: '50mb' }));

app.use(routes);

app.listen(PORT, () => {
  console.log('Server started on port 3333! 🚀');
})