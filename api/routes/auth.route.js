import express from 'express';
// import router from './user.route';
import { signin, singup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup",singup)
router.post("/signin",signin)

export default router;