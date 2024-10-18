import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import bcrypt from 'bcryptjs/dist/bcrypt.js';
dotenv.config();


// mongoose.connect(process.env.MONGO) // this sha
const MONGO = process.env.MONGO;  
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })  
  .then(() => console.log('MongoDB connected'))  
  .catch(err => console.error(err)); 


const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("server is running on 3000 port !!")
    }
);

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success : false,
    statusCode,
    message,
    
  });
});