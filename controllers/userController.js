import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'
import UserModel from '../models/User.js'
import CadrdDeckModel from '../models/cardDecks.js'

export const register = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            
            return res.status(400).json({
                message : errors.array(0)[0].msg
            })
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        console.log(req)
        const doc = new UserModel({
            email: req.body.email,
            username: req.body.username,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
            lvl: 1,
            diamonds: 0,
            emeralds: 0,
            souls: 0,
            cardDeck : {
                currentBoardId: null,
                currentItemId: null,
    
                decksIds: [
                    [],
                    [],
                    [],
                    [0]
                ],
                stats: [
                    {
                        totalHP: 0,
                        totalAttack: 0,
                        totalPowerRank: 0,
                    },
                    {
                        totalHP: 0,
                        totalAttack: 0,
                        totalPowerRank: 0,
                    },
                    {
                        totalHP: 0,
                        totalAttack: 0,
                        totalPowerRank: 0,
                    },
                ],
                cards: [{
                    name: 'Gate of tranquility',
                    level: 1,
                    damage: 170,
                    hitPoint: 150,
                    rank: 1,
                    stars: "\u2B50",
                    image: '/img/gate-of-tranquility.png',
                }],
                cardIndex: 1,
            }

        })
        const user = await doc.save()

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secretKey',
            {
                expiresIn: '30d'
            }
        )

        const { passwordHash, ...userData } = user._doc
        res.json({
            response : {
                userData,
                token,
                status: 300,
                data: {
                    message : "Реєстрація успішна!",
                }
            }
        })
    }
    catch (err) {
       return res.status(500).json({
            message: 'Не вдалось зареєструватись'
        })
    }
}
export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({
                message: 'He правильний логін або пароль',
            })
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
        if (!isValidPass) {
            return res.status(400).json({
                message: 'He правильний логін або пароль',
            })
        }
        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secretKey',
            {
                expiresIn: '30d'
            }
        )
        const { passwordHash, ...userData } = user._doc
        res.json({
            response : {
                userData,
                token,
                status: 300,
                data: {
                    message: 'Авторизація успішна!'
                }
            }
        })
    }
    catch (err) {

        res.status(500).json({
            message: 'Не вдалось зайти до аккаунту'
        })
    }
}
export const getUser = async (req, res) => {
    try {

        const user = await UserModel.findById(req.userId)
        if (!user) {
            return res.status(404).json({
                message: 'Користувач не знайдений'
            })
        }

        const { passwordHash, ...userData } = user._doc
        res.json(userData)
    } catch (err) {
        console.log('login error: ', err)
        res.status(500).json({
            message: 'Немає доступу'
        })
    }
}