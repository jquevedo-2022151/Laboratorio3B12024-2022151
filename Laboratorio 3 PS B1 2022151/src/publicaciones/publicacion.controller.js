'use strict'


import Usuario from '../usuario/usuario.model.js'
import Publicacion from './publicacion.model.js'
import { checkUpdate } from '../utils/validator.js'

export const test = (req, res)=>{
    return res.send('Hello World')
}

export const save = async(req, res)=>{
    try{
        let data = req.body
        let usuario = await Usuario.findOne({ _id: data.usuario})
        if (!usuario) return res.status(404).send({ message: 'usuario not found'})
        let publicacion = new Publicacion(data)
        await publicacion.save()
        return res.send({message: 'Publish save Successfull'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error saved publish', err})
    }
}

export const updatePublic = async(req, res)=>{
    try{
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have sumbitted some data that cannot be updated or missing data'})
        let updatedPublicacion = await Publicacion.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedPublicacion) return res.status(404).send({message: 'Publish not found and not Updated'})
        return res.send({message: 'Updated publish success', updatedPublicacion})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error updating publish'})
    }
}

export const deletePublic = async(req, res)=>{
    try{
        let { id } = req.params
        let deletePublic = await Publicacion.deleteOne({_id: id})
        if (!deletePublic) return res.status(404).send({message: 'Account not found and not deleted'})
        return res.send({message: 'Publish deleted successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting publish'})
    }
}