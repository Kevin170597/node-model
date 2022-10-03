import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routes';
import { dbConnect } from './config/mongo';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({credentials: true, origin: process.env.WHITE_URL1}));
app.use(express.json());
app.use(cookieParser());
app.use(router);

dbConnect().then(() => console.log('mongodb connected'))

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));