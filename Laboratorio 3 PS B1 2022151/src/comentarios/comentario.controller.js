'use strict'

import Publicacion from '../publicaciones/publicacion.model.js'
import Comentario from './comentario.model.js'
import { checkUpdate } from '../utils/validator.js'

export const test = (req, res) => {
    return res.send({ message: 'Access accepted' })
}

export const saveComment = async (req, res) => {
    try {
        let data = req.body
        let publicacion = await Publicacion.findOne({ _id: data.publicacion })
        if (!publicacion) return res.status(404).send({ message: 'Keeper not found' })
        let comentario = new Comentario(data)
        await comentario.save()
        return res.send({ message: 'comentario saved successfully' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error saving comentario'})
    }
}

export const updateComent = async(req, res)=>{
    try{
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if(!update) return res.status(400).send({message: 'Have submittied some data'})
        let updatedComentario = await Comentario.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedComentario) return res.status(404).send({message: 'Comentario not found, not updated'})
        return res.send({message: 'Comentario updated successfully', updatedComentario})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error updating comentario'})
    }
}

export const deleteComent = async(req, res)=>{
    try{
        let { id } = req.params
        let deleteComentario = await Comentario.deleteOne({_id: id})
        if(deleteComentario.deletedCount == 0) return res.status(404).send({message: 'Comment not found, not deleted'})
        return res.send({message: 'Deleted comment successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting comment'})
    }
}
