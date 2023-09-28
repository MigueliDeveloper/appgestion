import {Request, Response} from 'express';
import  Usuario from '../models/UsuarioModel';

export const getUsuarios = async(req: Request, res: Response) => {
    const listUsuarios = await Usuario.findAll();
    res.json(listUsuarios);
}

export const getUsuario = async (req: Request, res: Response) => {
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if(usuario){
        res.json(usuario)

    }else {
        res.status(404).json({
            msg: 'No existe un mensaje con ese &{id}',
        })
    }   

}

export const deleteUsuario= async (req: Request, res: Response) => {
    const {id} = req.params;
    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        res.json(404).json({
            msg: `No existe un curso con ese &{id}`
        })

    }else {
        await usuario.destroy();
        res.json({
            msg: 'El curso fue eliminado con exito.',
        })
    }
}

export const postUsuario = async (req: Request, res: Response) => {
    const {body} = req;

    try{
        await Usuario.create(body);
        res.json({

            msg: '¡El mensaje fue agregado con exito!'

        })

    }catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurriod un error'
        })

    }

}

export const updateUsuario = async (req: Request, res: Response) =>{
    const {body} = req;
    const {id} = req.params;
    try{
        const usuario = await Usuario.findByPk(id);

        if(usuario){
            await usuario.update(body);
            res.json({
                msg: 'El curso fue actualizado con exito'

            })
        }else{
            res.status(404).json({
                msg: 'No existe un curso con ese &{id}'
            })
        }
    } catch (error){
         console.log(error);
         res.json({
            msg: 'Ha ocurrido un error'
         })
    }   
} 