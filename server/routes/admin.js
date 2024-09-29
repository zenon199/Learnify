
import express from 'express';
import { createCourse } from '../controllers/admin.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post("/course/new", isAuth, createCourse)

export default router;