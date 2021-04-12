import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

import { User } from '../../../interfaces/index';

const KEY = 'cheiesecreta'

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (!req.body) {
        res.statusCode = 404
        res.end('Error')
        return
    }

    const user : User = JSON.parse(req.body)

    res.json({
        token: jwt.sign({
            user,
            admin: user.username === 'admin' && user.password === 'admin' 
        }, KEY),
        user
    })
}