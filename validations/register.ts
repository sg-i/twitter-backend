import {body} from 'express-validator';

export const registerValidations= [
    body('email', 'Введите email').isEmail().withMessage('Неверный email').isLength ({
        min: 5,
        max: 50
    }).withMessage('Неверное количество символов. Допустимая длина от 10 до 40.'),

    body('username', 'Введите имя').isString().isLength ({
        min: 2,
        max: 40
    }).withMessage('Неверное количество символов. Допустимая длина от 2 до 40.'),
    
    body('fullname', 'Введите login').isString().isLength ({
        min: 2,
        max: 40
    }).withMessage('Неверное количество символов. Допустимая длина от 2 до 40.'),

    body('password', 'Введите пароль').isString().isLength ({
        min: 6,
        max: 40
    }).withMessage('Неверное количество символов. Допустимая длина от 6 до 40.').custom((value, {req})=>{
        if (value !== req.body.password2){
            throw new Error('Пароли не совпадают');
        }
        else{
            return value;
        }
    }),
]