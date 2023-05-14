import { Router } from "express";
import { registerValidation, loginValidation } from '../validation.js'

import checkAuth from '../utils/checkAuth.js'
import * as userConroller from '../controllers/userController.js'

const router = new Router()

router.post('/register', registerValidation, userConroller.register)
router.post('/login', loginValidation, userConroller.login)
router.get('/me', checkAuth, userConroller.getUser)

export default router