import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

import ApiRouters from './router.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

ApiRouters(servidor);

const PORTA = process.env.PORTA

servidor.listen(PORTA, () => console.log(`-- Api funcionando na porta ${PORTA}`));