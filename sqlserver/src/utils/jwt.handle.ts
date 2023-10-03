import {sign, verify} from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

const generarToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: '2h',
    })
    return jwt

}

const verificarToken = (jwt: string) => {
    const esOk = verify(jwt, JWT_SECRET)
    return esOk
}

export {generarToken, verificarToken}