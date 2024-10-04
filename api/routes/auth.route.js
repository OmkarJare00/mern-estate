import express from 'express';
// import router from './user.route';
import { singup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup",singup)

export default router;