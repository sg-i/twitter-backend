import crypto from 'crypto'

export const generateMD5 = (value: string) : String  =>{
    return crypto.createHash('md5').update(value).digest('hex');
}