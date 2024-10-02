import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();


// mongoose.connect(process.env.MONGO) // this sha
const MONGO = process.env.MONGO;  
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })  
  .then(() => console.log('MongoDB connected'))  
  .catch(err => console.error(err)); 


const app = express();

app.listen(3000, () => {
    console.log("server is running on 3000 port !!")
    }
);
