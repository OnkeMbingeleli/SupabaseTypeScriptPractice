import express from 'express'
import { getBackendersCon, registerBackenderCon } from '../controllers/backenderController.js'

const router = express.Router()

router.get('/pull', getBackendersCon)
router.post('/addBackender', registerBackenderCon)

export default router

// http://localhost:4321/backender/addBackender   post
// http://localhost:4321/backender           get