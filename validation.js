import { body } from "express-validator";


export const registerValidation = [
    body('username', 'Мінімальна довжина імені 2 символи').isLength({min: 2}),
    body('email', 'Не коректний формат пошти').isEmail(),
    body('password', 'Мінімальна довжина паролю 8 символів').isLength({min: 8}),
    body('avatarUrl', 'Не привильне посилання на фото').optional().isURL(),
]

export const loginValidation = [
    body('email', 'Не коректний формат пошти').isEmail(),
    body('password', 'Мінімальна довжина паролю 8 символів').isLength({min: 8}),
]
