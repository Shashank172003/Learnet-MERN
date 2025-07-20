import express from 'express';
import { purchaseCourse, getUserPurchases } from '../controllers/coursePurchase.controller.js';

const router = express.Router();

// Route to purchase a course
router.post('/purchase', purchaseCourse);

// Optional: Route to fetch purchased courses for a user
router.get('/user/:userId', getUserPurchases);

export default router;
