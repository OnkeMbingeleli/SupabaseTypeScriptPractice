import express from 'express';
import { registerBackenderCon } from '../controllers/backenderController.js';
const router = express.Router();
router.post('/addBackender', registerBackenderCon);
export default router;
// https://localhost:4321/backender/addBackender
//# sourceMappingURL=backenderRoute.js.map