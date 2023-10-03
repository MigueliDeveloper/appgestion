import { Request, Response} from 'express'
import { registroNewUser, accesoUser} from '../services/authServices'


const registroCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registroNewUser(body)
    res.send(responseUser)
}

const accesoCtrl = async ({body}: Request, res: Response) => {
    const { email, password } = body
    const responseUser = await accesoUser({email, password})
    
    if(responseUser == "Contraseña Incorrecta"){
        res.status(403)
        res.
 

    }
}